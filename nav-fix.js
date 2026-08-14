document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href="our-team.html"]').forEach((link) => {
    link.setAttribute("href", "team.html");
  });

  /* DESTINATION CARDS: NAME ONLY */
  document.querySelectorAll(".destination span").forEach((subtitle) => {
    subtitle.remove();
  });

  /* FOOTER CONTACT DETAILS */
  document.querySelectorAll("footer").forEach((footer) => {
    const companyColumn = [...footer.querySelectorAll(".footer-column")].find((column) =>
      column.querySelector("strong")?.textContent.trim() === "COMPANY"
    );

    if (!companyColumn) return;

    const contactLink = [...companyColumn.querySelectorAll("a")].find((link) =>
      link.textContent.trim() === "Contact Us"
    );

    if (contactLink) {
      contactLink.href = "mailto:rosie.pacificworld@gmail.com";
    }

    if (!companyColumn.querySelector(".footer-contact-details")) {
      const details = document.createElement("div");
      details.className = "footer-contact-details";
      details.innerHTML = `
        <a href="tel:+84388855913" title="Zalo +84388855913">+84 388 855 913</a>
        <a href="mailto:rosie.pacificworld@gmail.com">rosie.pacificworld@gmail.com</a>
      `;
      companyColumn.appendChild(details);
    }
  });

  if (!document.getElementById("footer-contact-style")) {
    const style = document.createElement("style");
    style.id = "footer-contact-style";
    style.textContent = `
      .footer-contact-details {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 8px;
      }
      .footer-contact-details a {
        font-size: 12px;
        line-height: 1.4;
        opacity: .9;
        overflow-wrap: anywhere;
      }
      .footer-contact-details a:hover {
        color: #D4C5AD;
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
  }

  const nav = document.querySelector(".desktop-nav");
  if (!nav || nav.querySelector(".business-nav-dropdown")) return;

  const businessLink = [...nav.children].find((item) =>
    item.tagName === "A" && item.textContent.trim() === "Business Travel"
  );

  if (!businessLink) return;

  const dropdown = document.createElement("div");
  dropdown.className = "nav-dropdown business-nav-dropdown";
  dropdown.innerHTML = `
    <button class="nav-dropdown-toggle" type="button" aria-expanded="false"><span>Business Travel</span></button>
    <div class="nav-dropdown-menu">
      <a href="corporate-executive-travel.html">Corporate & Executive Travel</a>
      <a href="ground-transportation.html">Ground Transportation</a>
      <a href="hotels-resorts.html">Hotels & Resorts</a>
      <a href="private-aviation-yachts.html">Private Aviation & Yachts</a>
    </div>
  `;
  businessLink.replaceWith(dropdown);

  const toggle = dropdown.querySelector(".nav-dropdown-toggle");
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = dropdown.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
});
