document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href="our-team.html"]').forEach((link) => {
    link.setAttribute("href", "team.html");
  });

  /* DESTINATION CARDS: NAME ONLY */
  document.querySelectorAll(".destination span").forEach((subtitle) => {
    subtitle.remove();
  });

  /* DESTINATIONS PAGE LINKS */
  document.querySelectorAll(".desktop-nav a, footer a").forEach((link) => {
    if (link.textContent.trim() === "Destinations") {
      link.setAttribute("href", "destinations.html");
    }
  });

  const viewAllDestinations = [...document.querySelectorAll("a")].find((link) =>
    link.textContent.trim().toLowerCase().startsWith("view all destinations")
  );
  if (viewAllDestinations) {
    viewAllDestinations.setAttribute("href", "destinations.html");
  }

  /* CLIENT EXPERIENCE — testimonial-style without invented endorsements */
  const whySection = document.querySelector(".why");
  if (whySection && !document.querySelector(".client-experience")) {
    document.querySelector(".client-stories-shell")?.remove();

    const clientSection = document.createElement("section");
    clientSection.className = "client-experience";
    clientSection.innerHTML = `
      <div class="client-experience-head">
        <p class="eyebrow">CLIENT EXPERIENCE</p>
        <h2>What good travel management should feel like.</h2>
        <p>Clear communication, thoughtful planning and dependable support — the standards we bring to every journey.</p>
      </div>
      <div class="client-experience-grid">
        <article class="client-experience-card">
          <span class="client-mark">“</span>
          <h3>Responsive & reliable</h3>
          <p>Fast answers, clear ownership and a team that stays close to the details from planning through travel.</p>
          <small>DEDICATED SUPPORT</small>
        </article>
        <article class="client-experience-card featured">
          <span class="client-mark">“</span>
          <h3>Seamless from end to end</h3>
          <p>Hotels, transport, golf, meetings and experiences coordinated as one journey rather than separate bookings.</p>
          <small>ONE CONNECTED PLAN</small>
        </article>
        <article class="client-experience-card">
          <span class="client-mark">“</span>
          <h3>Local knowledge, personally delivered</h3>
          <p>On-the-ground relationships and practical destination insight help make each programme feel considered and effortless.</p>
          <small>LOCAL EXPERTISE</small>
        </article>
      </div>
    `;
    whySection.parentNode.insertBefore(clientSection, whySection);

    if (!document.getElementById("client-experience-style")) {
      const clientStyle = document.createElement("style");
      clientStyle.id = "client-experience-style";
      clientStyle.textContent = `
        .client-experience {
          padding: 90px 6.4vw 96px;
          background: #263C32;
          color: #F7F4ED;
        }
        .client-experience-head {
          max-width: 780px;
          margin: 0 auto 46px;
          text-align: center;
        }
        .client-experience-head .eyebrow { color: #D4C5AD; }
        .client-experience-head h2 {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(40px, 4.7vw, 66px);
          line-height: 1;
          font-weight: 500;
          letter-spacing: -.035em;
          color: #F7F4ED;
        }
        .client-experience-head > p:last-child {
          max-width: 620px;
          margin: 18px auto 0;
          font-size: 14px;
          line-height: 1.65;
          color: rgba(247,244,237,.68);
        }
        .client-experience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          max-width: 1450px;
          margin: 0 auto;
        }
        .client-experience-card {
          position: relative;
          min-height: 315px;
          padding: 30px 30px 28px;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(247,244,237,.18);
          border-radius: 16px;
          background: rgba(247,244,237,.045);
          transition: transform .25s ease, background .25s ease, border-color .25s ease;
        }
        .client-experience-card:hover {
          transform: translateY(-5px);
          border-color: rgba(212,197,173,.55);
          background: rgba(247,244,237,.075);
        }
        .client-experience-card.featured {
          background: #E8DFD0;
          color: #263C32;
          border-color: #E8DFD0;
        }
        .client-mark {
          display: block;
          margin-bottom: 44px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 54px;
          line-height: .7;
          color: #D4C5AD;
        }
        .client-experience-card.featured .client-mark { color: #68735A; }
        .client-experience-card h3 {
          margin: 0 0 14px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 29px;
          line-height: 1.08;
          font-weight: 500;
        }
        .client-experience-card p {
          margin: 0 0 26px;
          font-size: 13px;
          line-height: 1.7;
          color: rgba(247,244,237,.72);
        }
        .client-experience-card.featured p { color: #566255; }
        .client-experience-card small {
          margin-top: auto;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .12em;
          color: #D4C5AD;
        }
        .client-experience-card.featured small { color: #68735A; }
        @media (max-width: 900px) {
          .client-experience-grid { grid-template-columns: 1fr; }
          .client-experience-card { min-height: 250px; }
        }
        @media (max-width: 620px) {
          .client-experience { padding: 70px 20px 76px; }
          .client-experience-card { padding: 26px 24px; }
          .client-mark { margin-bottom: 30px; }
        }
      `;
      document.head.appendChild(clientStyle);
    }
  }

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
      contactLink.href = "contact.html";
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
