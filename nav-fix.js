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

  /* CLIENT EXPERIENCE — review-card style inspired by the supplied reference */
  const whySection = document.querySelector(".why");
  if (whySection && !document.querySelector(".client-experience")) {
    document.querySelector(".client-stories-shell")?.remove();

    const clientSection = document.createElement("section");
    clientSection.className = "client-experience";
    clientSection.innerHTML = `
      <div class="client-experience-head">
        <p class="eyebrow">CLIENT EXPERIENCE</p>
        <h2>The kind of travel experience we aim to deliver.</h2>
        <p>Thoughtful planning, responsive support and local expertise — expressed through the moments that matter most to travellers.</p>
      </div>

      <div class="client-review-grid">
        <article class="client-review-card">
          <div class="review-top">
            <h3>Everything feels taken care of</h3>
            <div class="review-stars" aria-label="Five stars">★★★★★</div>
          </div>
          <p class="review-copy">Clear communication, thoughtful coordination and support at the right moments make even complex business travel feel simple and well managed.</p>
          <div class="review-footer">
            <span class="review-avatar">B</span>
            <span class="review-persona">Business Traveller</span>
            <span class="review-tag">Corporate Travel</span>
          </div>
        </article>

        <article class="client-review-card">
          <div class="review-top">
            <h3>Smooth from tee time to transfer</h3>
            <div class="review-stars" aria-label="Five stars">★★★★★</div>
          </div>
          <p class="review-copy">Course bookings, hotels and transport are planned as one connected journey, leaving more time to enjoy the golf and the destination.</p>
          <div class="review-footer">
            <span class="review-avatar">G</span>
            <span class="review-persona">Golf Traveller</span>
            <span class="review-tag">Golf Journey</span>
          </div>
        </article>

        <article class="client-review-card">
          <div class="review-top">
            <h3>A retreat that feels effortless</h3>
            <div class="review-stars" aria-label="Five stars">★★★★★</div>
          </div>
          <p class="review-copy">A well-paced programme can balance productive time with local experiences, restorative moments and space for teams to reconnect.</p>
          <div class="review-footer">
            <span class="review-avatar">R</span>
            <span class="review-persona">Corporate Group</span>
            <span class="review-tag">Retreat</span>
          </div>
        </article>
      </div>
    `;
    whySection.parentNode.insertBefore(clientSection, whySection);

    if (!document.getElementById("client-experience-style")) {
      const clientStyle = document.createElement("style");
      clientStyle.id = "client-experience-style";
      clientStyle.textContent = `
        .client-experience {
          padding: 88px 6.4vw 96px;
          background: #F2EEE5;
          color: #263C32;
        }
        .client-experience-head {
          max-width: 760px;
          margin: 0 auto 44px;
          text-align: center;
        }
        .client-experience-head h2 {
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(40px, 4.6vw, 64px);
          line-height: 1;
          font-weight: 500;
          letter-spacing: -.035em;
          color: #263C32;
        }
        .client-experience-head > p:last-child {
          max-width: 620px;
          margin: 18px auto 0;
          font-size: 14px;
          line-height: 1.65;
          color: #68735A;
        }
        .client-review-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 1450px;
          margin: 0 auto;
        }
        .client-review-card {
          min-height: 285px;
          padding: 28px 28px 24px;
          display: flex;
          flex-direction: column;
          background: #FCFBF7;
          border: 1px solid rgba(38,60,50,.13);
          border-radius: 8px;
          box-shadow: 0 10px 28px rgba(38,60,50,.045);
          transition: transform .24s ease, box-shadow .24s ease, border-color .24s ease;
        }
        .client-review-card:hover {
          transform: translateY(-4px);
          border-color: rgba(104,115,90,.38);
          box-shadow: 0 18px 38px rgba(38,60,50,.08);
        }
        .review-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(38,60,50,.11);
        }
        .review-top h3 {
          margin: 0;
          max-width: 290px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 23px;
          line-height: 1.12;
          font-weight: 500;
          color: #263C32;
        }
        .review-stars {
          flex: 0 0 auto;
          color: #84A957;
          font-size: 15px;
          letter-spacing: 2px;
          line-height: 1.2;
        }
        .review-copy {
          margin: 20px 0 25px;
          font-size: 13px;
          line-height: 1.7;
          color: #5E695E;
        }
        .review-footer {
          margin-top: auto;
          display: grid;
          grid-template-columns: 34px 1fr auto;
          align-items: center;
          gap: 10px;
        }
        .review-avatar {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #263C32;
          color: #F7F4ED;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 14px;
        }
        .review-persona {
          font-size: 11px;
          font-weight: 500;
          color: #566255;
        }
        .review-tag {
          padding: 6px 9px;
          border-radius: 5px;
          background: #EDF3E4;
          color: #688445;
          font-size: 9px;
          font-weight: 600;
          white-space: nowrap;
        }
        @media (max-width: 980px) {
          .client-review-grid { grid-template-columns: 1fr; }
          .client-review-card { min-height: 240px; }
        }
        @media (max-width: 620px) {
          .client-experience { padding: 68px 20px 74px; }
          .client-review-card { padding: 24px 20px 21px; }
          .review-top { flex-direction: column; gap: 10px; }
          .review-footer { grid-template-columns: 34px 1fr; }
          .review-tag { grid-column: 2; justify-self: start; }
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
