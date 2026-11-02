#!/usr/bin/env python3
"""Build Pacific World Travel CMS articles without modifying legacy article pages."""
from pathlib import Path
import html, re
import yaml, markdown

ROOT = Path(__file__).resolve().parents[1]
POSTS = ROOT / "content" / "posts"
LIST = ROOT / "journal.html"
TEMPLATE = ROOT / "journal-best-golf-courses-vietnam.html"
START, END = "<!-- CMS GENERATED START -->", "<!-- CMS GENERATED END -->"

def esc(s):
    return html.escape(str(s or ""), quote=True)

def main():
    original = TEMPLATE.read_text(encoding="utf-8")
    before, rest = original.split("<main>", 1)
    _, after = rest.rsplit("</main>", 1)
    listing = LIST.read_text(encoding="utf-8")
    listing = re.sub(re.escape(START) + r".*?" + re.escape(END), "", listing, flags=re.S)
    cards = []
    posts = sorted(POSTS.glob("*.md")) if POSTS.exists() else []
    for file in posts:
        raw = file.read_text(encoding="utf-8")
        matched = re.match(r"\A---\s*\n(.*?)\n---\s*\n(.*)\Z", raw, flags=re.S)
        if not matched:
            raise ValueError(f"Missing front matter in {file}")
        meta = yaml.safe_load(matched.group(1)) or {}
        title = str(meta.get("title") or file.stem)
        description = str(meta.get("description") or "")
        category = str(meta.get("category") or "Travel advice")
        photo = str(meta.get("image") or "")
        if not photo:
            raise ValueError(f"Featured image required for {file}")
        slug = re.sub("[^a-z0-9-]", "-", file.stem.lower()).strip("-")
        page = f"journal-{slug}.html"
        content = markdown.markdown(matched.group(2), extensions=["extra", "sane_lists"])
        article = ('<article class="journal-article"><a class="breadcrumb" href="journal.html">← Back to the Journal</a>'
            '<div class="journal-kicker">' + esc(category) + ' · Vietnam</div>'
            '<h1>' + esc(title) + '</h1><p class="journal-article-lead">' + esc(description) + '</p>'
            '<img class="journal-feature" src="' + esc(photo) + '" alt="' + esc(title) + '">'
            '<div class="journal-copy">' + content +
            '<div class="journal-cta"><h2>Planning a journey to Vietnam?</h2>'
            '<p>Tell us the dates, destinations and travellers you have in mind.</p>'
            '<a href="contact.html">Start a conversation →</a></div>'
            '<a class="journal-back" href="journal.html">← Explore more stories</a></div></article>')
        (ROOT / page).write_text(before + '<main>' + article + '</main>' + after, encoding="utf-8")
        cards.append('<a class="journal-card" href="' + esc(page) + '">'
            '<img loading="lazy" src="' + esc(photo) + '" alt="' + esc(title) + '">'
            '<span class="tag">' + esc(category) + '</span><h2>' + esc(title) + '</h2>'
            '<p>' + esc(description) + '</p><span class="read">Read story →</span></a>')
    marker = START + ''.join(cards) + END
    anchor = '</section></main>'
    if anchor not in listing:
        raise ValueError("Could not locate Journal article grid")
    listing = listing.replace(anchor, marker + anchor, 1)
    LIST.write_text(listing, encoding="utf-8")
    print(f"Generated {len(posts)} CMS articles")

if __name__ == "__main__":
    main()
