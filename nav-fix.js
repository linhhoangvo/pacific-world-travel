document.addEventListener("DOMContentLoaded", () => {
  /* Keep legacy team links pointed to the active team page */
  document.querySelectorAll('a[href="our-team.html"]').forEach((link) => {
    link.setAttribute("href", "team.html");
  });

  /* Homepage: the moving trust bar already communicates these proof points. */
  document.querySelector(".why.why-compact")?.remove();

  /* Homepage: replace the old promise block with two strong service gateways. */
  const promiseSection = document.querySelector(".promise.section");
  if (promiseSection && !promiseSection.classList.contains("gateway-promise")) {
    promiseSection.classList.add("gateway-promise");
    promiseSection.innerHTML = `
      <a class="travel-gateway business-gateway" id="business" href="corporate-executive-travel.html">
        <div class="travel-gateway-shade"></div>
        <div class="travel-gateway-copy">
          <span class="travel-gateway-kicker">BUSINESS TRAVEL</span>
          <h2>Business Travel</h2>
          <h3>Smart. Simple. Seamless.</h3>
          <p>Flights, hotels, executive transport and on-trip support, managed as one journey.</p>
          <span class="travel-gateway-link">Explore Business Travel <b>→</b></span>
        </div>
      </a>
      <a class="travel-gateway golf-gateway" id="golf" href="golf-holidays-journeys.html">
        <div class="travel-gateway-shade"></div>
        <div class="travel-gateway-copy">
          <span class="travel-gateway-kicker">GOLF TRAVEL</span>
          <h2>Golf Travel</h2>
          <h3>Play more. Experience more.</h3>
          <p>Tee times, golf resorts, private transfers and tailored golf journeys across Vietnam.</p>
          <span class="travel-gateway-link">Explore Golf Travel <b>→</b></span>
        </div>
      </a>
    `;

    const gatewayStyle = document.createElement("style");
    gatewayStyle.id = "homepage-gateway-style";
    gatewayStyle.textContent = `
      .promise.section.gateway-promise{
        padding:0 !important;
        display:grid !important;
        grid-template-columns:1fr 1fr !important;
        gap:0 !important;
        background:#F7F4ED !important;
      }
      .travel-gateway{
        position:relative;
        min-height:580px;
        overflow:hidden;
        display:flex;
        align-items:flex-end;
        color:#fff;
        background-size:cover;
        background-position:center;
        text-decoration:none;
      }
      .business-gateway{background-image:url('business-travel.jpg');background-position:center 50%}
      .golf-gateway{background-image:url('golf-travel.jpg');background-position:center 56%}
      .travel-gateway-shade{
        position:absolute;
        inset:0;
        background:linear-gradient(180deg,rgba(24,43,35,.05) 18%,rgba(24,43,35,.18) 48%,rgba(24,43,35,.88) 100%);
        transition:background .3s ease;
      }
      .travel-gateway:hover .travel-gateway-shade{
        background:linear-gradient(180deg,rgba(24,43,35,.08) 18%,rgba(24,43,35,.24) 48%,rgba(24,43,35,.94) 100%);
      }
      .travel-gateway-copy{
        position:relative;
        z-index:2;
        width:100%;
        max-width:650px;
        padding:48px 5.2vw 52px;
      }
      .travel-gateway-kicker{
        display:block;
        margin-bottom:12px;
        font-size:9px;
        font-weight:700;
        letter-spacing:.14em;
        color:rgba(255,255,255,.72);
      }
      .travel-gateway h2{
        margin:0;
        font-family:"Playfair Display",Georgia,serif;
        font-size:clamp(42px,4.6vw,68px);
        line-height:.98;
        font-weight:500;
        letter-spacing:-.035em;
        color:#fff;
      }
      .travel-gateway h3{
        margin:12px 0 14px;
        font-family:"DM Sans",sans-serif;
        font-size:clamp(17px,1.7vw,24px);
        line-height:1.2;
        font-weight:500;
        color:#fff;
      }
      .travel-gateway p{
        max-width:500px;
        margin:0 0 23px;
        font-size:13px;
        line-height:1.65;
        color:rgba(255,255,255,.82);
      }
      .travel-gateway-link{
        display:inline-flex;
        align-items:center;
        gap:14px;
        font-size:9px;
        font-weight:700;
        letter-spacing:.1em;
        text-transform:uppercase;
        color:#fff;
      }
      .travel-gateway-link b{font-size:14px;font-weight:400;transition:transform .2s ease}
      .travel-gateway:hover .travel-gateway-link b{transform:translateX(5px)}
      @media(max-width:820px){
        .promise.section.gateway-promise{grid-template-columns:1fr !important;gap:14px !important;padding:18px !important}
        .travel-gateway{min-height:490px;border-radius:6px}
        .travel-gateway-copy{padding:34px 30px 38px}
      }
      @media(max-width:520px){
        .promise.section.gateway-promise{padding:14px !important;gap:14px !important}
        .travel-gateway{min-height:440px}
        .travel-gateway-copy{padding:28px 24px 32px}
        .travel-gateway h2{font-size:42px}
        .travel-gateway h3{font-size:18px}
        .travel-gateway p{font-size:12px;line-height:1.6}
      }
    `;
    document.head.appendChild(gatewayStyle);
  }

  /* Team page: go straight to the team rather than repeating two large intro statements. */
  if (document.body.classList.contains("team-page")) {
    document.querySelector(".team-hero")?.remove();
    document.querySelector(".people-heading")?.remove();
    const peopleSection = document.querySelector(".people-section");
    if (peopleSection) peopleSection.style.paddingTop = "72px";
  }

  /* Destination cards: destination name only */
  document.querySelectorAll(".destination span").forEach((subtitle) => subtitle.remove());
  document.querySelectorAll(".desktop-nav a, footer a").forEach((link) => {
    if (link.textContent.trim() === "Destinations") link.setAttribute("href", "destinations.html");
  });
  const viewAllDestinations = [...document.querySelectorAll("a")].find((link) =>
    link.textContent.trim().toLowerCase().startsWith("view all destinations")
  );
  if (viewAllDestinations) viewAllDestinations.setAttribute("href", "destinations.html");

  /* Homepage Hanoi card */
  const homepageHanoi = document.querySelector(".destination.d1");
  if (homepageHanoi && !homepageHanoi.dataset.detailLinked) {
    homepageHanoi.dataset.detailLinked = "true";
    homepageHanoi.setAttribute("role", "link");
    homepageHanoi.setAttribute("tabindex", "0");
    homepageHanoi.setAttribute("aria-label", "Explore Hanoi");
    homepageHanoi.style.cursor = "pointer";
    homepageHanoi.addEventListener("click", () => { window.location.href = "hanoi.html"; });
    homepageHanoi.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = "hanoi.html";
      }
    });
  }

  /* MOVING TRUST BAR BELOW HERO */
  const benefitBar = document.querySelector(".hero-benefits");
  if (benefitBar && !benefitBar.classList.contains("trust-marquee")) {
    const benefits = [
      { icon: "♙", label: "Dedicated Specialist" },
      { icon: "◷", label: "24/7 Support" },
      { icon: "⌖", label: "Local Expertise" },
      { icon: "◇", label: "Business + Golf" },
      { icon: "◎", label: "Trusted Partners" },
      { icon: "✦", label: "Tailored Journeys" }
    ];
    const group = benefits.map((item) => `<div class="trust-item"><span class="trust-icon">${item.icon}</span><span class="trust-label">${item.label}</span></div>`).join("");
    benefitBar.classList.add("trust-marquee");
    benefitBar.innerHTML = `<div class="trust-track"><div class="trust-group">${group}</div><div class="trust-group" aria-hidden="true">${group}</div></div>`;

    const trustStyle = document.createElement("style");
    trustStyle.id = "trust-marquee-style";
    trustStyle.textContent = `
      .hero{padding-bottom:78px}.hero-inner{padding-bottom:54px!important}
      .hero-benefits.trust-marquee{position:absolute;left:0;right:0;bottom:0;z-index:4;display:block;min-height:78px;height:78px;overflow:hidden;background:#F7F4ED!important;border-top:1px solid rgba(38,60,50,.12);color:#263C32}
      .trust-track{display:flex;width:max-content;height:100%;animation:pacificTrustScroll 28s linear infinite;will-change:transform}.trust-marquee:hover .trust-track{animation-play-state:paused}
      .trust-group{display:flex;align-items:center;flex-shrink:0;height:100%}.trust-item{display:flex;align-items:center;gap:12px;min-width:250px;padding:0 34px;border-right:1px solid rgba(38,60,50,.10);white-space:nowrap}
      .trust-icon{width:30px;height:30px;display:grid;place-items:center;flex:0 0 auto;color:#7EA24F;font-size:23px;line-height:1}.trust-label{color:#263C32;font-size:13px;font-weight:500;letter-spacing:.005em}
      @keyframes pacificTrustScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
      @media(prefers-reduced-motion:reduce){.trust-track{animation:none}}
      @media(max-width:720px){.hero{padding-bottom:68px}.hero-benefits.trust-marquee{height:68px;min-height:68px}.trust-track{animation-duration:34s}.trust-item{min-width:205px;padding:0 24px;gap:10px}.trust-icon{width:26px;height:26px;font-size:20px}.trust-label{font-size:11px}}
    `;
    document.head.appendChild(trustStyle);
  }

  /* Real Hanoi hotel photos — keep hotel clicks inside Pacific World */
  if (!document.getElementById("real-hotel-photo-style")) {
    const hotelPhotoStyle = document.createElement("style");
    hotelPhotoStyle.id = "real-hotel-photo-style";
    hotelPhotoStyle.textContent = `
      .stay-grid.real-hotels .hotel-property{overflow:hidden!important;padding:0 24px 26px!important}
      .stay-grid.real-hotels .hotel-property::before{content:"";display:block;height:210px;margin:0 -24px 22px;background-size:cover;background-position:center;transition:transform .3s ease}
      .stay-grid.real-hotels .hotel-property:nth-child(1)::before{background-image:url("https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1340020.jpg");background-position:center 52%}
      .stay-grid.real-hotels .hotel-property:nth-child(2)::before{background-image:url("https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/680045164-14c37d50ef085549e23d6c45501bc4f1.png?_src=imagekit&tr=dpr-3");background-position:center 54%}
      .stay-grid.real-hotels .hotel-property:nth-child(3)::before{background-image:url("https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1496122.jpg");background-position:center 50%}
      .stay-grid.real-hotels .hotel-property:hover::before{transform:scale(1.025)}
      .hotel-collection .hotel-card{overflow:hidden!important;padding:0 28px 28px!important}.hotel-collection .hotel-card::before{content:"";display:block;height:220px;margin:0 -28px 22px;background-size:cover;background-position:center}
      .hotel-collection .hotel-card:nth-child(1)::before{background-image:url("https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1340020.jpg");background-position:center 52%}
      .hotel-collection .hotel-card:nth-child(2)::before{background-image:url("https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/680045164-14c37d50ef085549e23d6c45501bc4f1.png?_src=imagekit&tr=dpr-3");background-position:center 54%}
      .hotel-collection .hotel-card:nth-child(3)::before{background-image:url("https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1496122.jpg");background-position:center 50%}
      @media(max-width:760px){.stay-grid.real-hotels .hotel-property::before{height:190px}.hotel-collection .hotel-card::before{height:205px}}
    `;
    document.head.appendChild(hotelPhotoStyle);
  }

  /* Real names + Google review profiles for the rotating homepage client card */
  const realClientProfiles = {
    "Business Traveller": { name: "Irene Juarez O'Connell", initial: "I", url: "https://www.google.com/maps/contrib/102385862973990856404/reviews?hl=en-GB" },
    "Golf Traveller": { name: "Alyssa Jones", initial: "A", url: "https://www.google.com/maps/contrib/109798992282280910379/reviews?hl=en-GB" },
    "Corporate Group": { name: "Anina Monteforte", initial: "A", url: "https://www.google.com/maps/contrib/103283086171953943390/reviews?hl=en-GB" }
  };
  const rotatingClientName = document.getElementById("client-persona");
  const rotatingClientIcon = document.getElementById("client-icon");
  function replaceClientPersonaWithRealName(){
    if(!rotatingClientName)return;
    const current=rotatingClientName.textContent.trim();
    const profile=realClientProfiles[current];
    if(!profile)return;
    rotatingClientName.innerHTML=`<a href="${profile.url}" target="_blank" rel="noopener noreferrer">${profile.name}</a>`;
    if(rotatingClientIcon)rotatingClientIcon.textContent=profile.initial;
  }
  replaceClientPersonaWithRealName();
  if(rotatingClientName){new MutationObserver(()=>replaceClientPersonaWithRealName()).observe(rotatingClientName,{childList:true,subtree:true,characterData:true})}
  if(!document.getElementById("real-client-name-style")){
    const clientNameStyle=document.createElement("style");clientNameStyle.id="real-client-name-style";clientNameStyle.textContent=`#client-persona a{color:#566255;text-decoration:none}#client-persona a:hover{color:#263C32;text-decoration:underline;text-underline-offset:3px}`;document.head.appendChild(clientNameStyle)
  }

  /* Footer contact details */
  document.querySelectorAll("footer").forEach((footer) => {
    const companyColumn=[...footer.querySelectorAll(".footer-column")].find((column)=>column.querySelector("strong")?.textContent.trim()==="COMPANY");
    if(!companyColumn)return;
    const contactLink=[...companyColumn.querySelectorAll("a")].find((link)=>link.textContent.trim()==="Contact Us");
    if(contactLink)contactLink.href="contact.html";
    if(!companyColumn.querySelector(".footer-contact-details")){
      const details=document.createElement("div");details.className="footer-contact-details";details.innerHTML=`<a href="tel:+84388855913" title="Zalo +84388855913">+84 388 855 913</a><a href="mailto:rosie.pacificworld@gmail.com">rosie.pacificworld@gmail.com</a>`;companyColumn.appendChild(details)
    }
  });
  if(!document.getElementById("footer-contact-style")){
    const style=document.createElement("style");style.id="footer-contact-style";style.textContent=`.footer-contact-details{display:flex;flex-direction:column;gap:6px;margin-top:8px}.footer-contact-details a{font-size:12px;line-height:1.4;opacity:.9;overflow-wrap:anywhere}.footer-contact-details a:hover{color:#D4C5AD;opacity:1}`;document.head.appendChild(style)
  }
});