document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href="our-team.html"]').forEach((link) => {
    link.setAttribute("href", "team.html");
  });

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
