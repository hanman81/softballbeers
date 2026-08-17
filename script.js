const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
const navLinks = nav.querySelectorAll("a");
const legalDialog = document.querySelector("#legal");
const legalOpenButton = document.querySelector('[data-modal-open="legal"]');
const legalCloseButton = document.querySelector("[data-modal-close]");

const setMenu = (open) => {
  menuButton.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
};

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

legalOpenButton.addEventListener("click", () => {
  if (typeof legalDialog.showModal === "function") {
    legalDialog.showModal();
  } else {
    legalDialog.setAttribute("open", "");
  }
});

legalCloseButton.addEventListener("click", () => legalDialog.close());

legalDialog.addEventListener("click", (event) => {
  if (event.target === legalDialog) legalDialog.close();
});

const gallery = document.querySelector(".gallery");

if (gallery) {
  const galleryStage = gallery.querySelector(".gallery-stage");
  const galleryDots = gallery.querySelector(".gallery-dots");
  const galleryCount = gallery.querySelector(".gallery-count");

  const galleryItems = [
    ["assets/gallery/2026-championship-celebration-bar.jpg", "The Boathouse Beers team celebrating together at the bar after winning the 2026 championship", "Championship celebration"],
    ["assets/gallery/fall-2025-team-photo.jpg", "The Boathouse Beers Fall 2025 team posing together in matching jerseys", "Fall 2025 team"],
    ["assets/gallery/2025-season-banquet-cavalier.jpg", "Boathouse Beers teammates together after dinner at The Cavalier in San Francisco for the 2025 season banquet", "2025 season banquet · The Cavalier, San Francisco"],
    ["assets/gallery/2025-summer-banquet.svg", "Boathouse Beers teammates and friends gathered outdoors at night during the 2025 summer banquet", "Summer 2025 banquet"],
    ["assets/gallery/2024-banquet-topgolf.jpg", "Boathouse Beers teammates and friends together at Topgolf for the 2024 team banquet", "2024 banquet · Topgolf"],
    ["assets/gallery/2023-first-season-banquet.svg", "Boathouse Beers teammates together at the 2023 banquet after the team's first season", "2023 banquet · After our first season"],
    ["assets/gallery/first-win-team.jpg", "The Boathouse Beers team posing together on the softball field after their first win", "After our first win"],
  ];

  galleryItems.forEach(([src, alt, caption], itemIndex) => {
    const slide = document.createElement("figure");
    slide.className = "gallery-slide";
    slide.dataset.slide = "";
    slide.setAttribute("aria-hidden", "true");
    slide.innerHTML = `<img src="${src}" alt="${alt}" loading="lazy" /><figcaption>${caption}</figcaption>`;
    galleryStage.appendChild(slide);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.dataset.galleryDot = String(itemIndex + 2);
    dot.setAttribute("aria-label", `Show photo ${itemIndex + 3}`);
    galleryDots.appendChild(dot);
  });

  const slides = Array.from(gallery.querySelectorAll("[data-slide]"));
  const dots = Array.from(gallery.querySelectorAll("[data-gallery-dot]"));
  const previousButton = gallery.querySelector("[data-gallery-prev]");
  const nextButton = gallery.querySelector("[data-gallery-next]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeSlide = 0;
  let autoplayTimer;
  let touchStartX = 0;

  if (galleryCount) galleryCount.innerHTML = `<span data-gallery-current>1</span> / ${slides.length}`;
  const currentLabel = gallery.querySelector("[data-gallery-current]");

  const showSlide = (index) => {
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeSlide;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });
    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeSlide;
      dot.classList.toggle("is-active", isActive);
      if (isActive) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
    if (currentLabel) currentLabel.textContent = String(activeSlide + 1);
  };

  const stopAutoplay = () => window.clearInterval(autoplayTimer);
  const startAutoplay = () => {
    if (!reducedMotion) {
      stopAutoplay();
      autoplayTimer = window.setInterval(() => showSlide(activeSlide + 1), 6000);
    }
  };

  previousButton.addEventListener("click", () => { showSlide(activeSlide - 1); startAutoplay(); });
  nextButton.addEventListener("click", () => { showSlide(activeSlide + 1); startAutoplay(); });
  dots.forEach((dot) => dot.addEventListener("click", () => { showSlide(Number(dot.dataset.galleryDot)); startAutoplay(); }));
  gallery.addEventListener("mouseenter", stopAutoplay);
  gallery.addEventListener("mouseleave", startAutoplay);
  gallery.addEventListener("focusin", stopAutoplay);
  gallery.addEventListener("focusout", startAutoplay);
  gallery.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showSlide(activeSlide - 1);
    if (event.key === "ArrowRight") showSlide(activeSlide + 1);
  });
  gallery.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  gallery.addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) showSlide(activeSlide + (distance < 0 ? 1 : -1));
  }, { passive: true });
  startAutoplay();
}

const addBanquetPhoto = (matcher, src, alt) => {
  const card = Array.from(document.querySelectorAll(".banquet-card")).find(matcher);
  if (card && !card.querySelector("img")) {
    const photo = document.createElement("img");
    photo.src = src;
    photo.alt = alt;
    photo.loading = "lazy";
    photo.style.width = "100%";
    photo.style.aspectRatio = "4 / 3";
    photo.style.objectFit = "cover";
    photo.style.borderRadius = "14px";
    photo.style.marginBottom = "1rem";
    card.prepend(photo);
  }
};

addBanquetPhoto((card) => card.classList.contains("banquet-latest"), "assets/gallery/2025-season-banquet-cavalier.jpg", "Boathouse Beers teammates together after dinner at The Cavalier in San Francisco for the 2025 season banquet");
addBanquetPhoto((card) => card.querySelector("h3")?.textContent.includes("Coach’s backyard"), "assets/gallery/2025-summer-banquet.svg", "Boathouse Beers teammates and friends gathered outdoors at night during the Summer 2025 banquet in the coach's backyard");
addBanquetPhoto((card) => card.querySelector("h3")?.textContent.includes("Topgolf"), "assets/gallery/2024-banquet-topgolf.jpg", "Boathouse Beers teammates and friends together at Topgolf for the 2024 team banquet");
addBanquetPhoto((card) => card.querySelector("h3")?.textContent.includes("Boathouse Tavern"), "assets/gallery/2023-first-season-banquet.svg", "Boathouse Beers teammates together at the 2023 banquet after the team's first season");

const sponsorSection = document.querySelector("#sponsor");
if (sponsorSection) {
  const sponsorCopy = sponsorSection.querySelector(".sponsor-copy");
  const sponsorBadge = sponsorSection.querySelector(".sponsor-badge");

  if (sponsorCopy && !sponsorCopy.querySelector(".sponsor-location")) {
    const locationBlock = document.createElement("div");
    locationBlock.className = "sponsor-location";
    locationBlock.innerHTML = `
      <p style="margin:1.5rem 0 .35rem;font-weight:800;color:#fff;">2030 Clement Avenue</p>
      <p style="margin:0 0 .75rem;">Alameda, CA 94501</p>
      <a href="https://www.google.com/maps/search/?api=1&query=2030+Clement+Avenue+Alameda+CA+94501" target="_blank" rel="noopener" style="display:inline-block;margin-bottom:1.25rem;color:#f7b928;font-weight:800;text-decoration:none;">Open in Google Maps ↗</a>
      <div style="overflow:hidden;border-radius:16px;border:1px solid rgba(255,255,255,.18);width:100%;max-width:620px;box-shadow:0 18px 45px rgba(0,0,0,.22);">
        <iframe title="Boathouse Tavern map" src="https://www.google.com/maps?q=2030+Clement+Avenue,+Alameda,+CA+94501&output=embed" width="100%" height="280" style="border:0;display:block;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>`;
    const visitButton = sponsorCopy.querySelector(".button");
    if (visitButton) sponsorCopy.insertBefore(locationBlock, visitButton);
    else sponsorCopy.appendChild(locationBlock);
  }

  if (sponsorBadge) {
    sponsorBadge.innerHTML = `
      <a href="https://www.boathousealameda.net/" target="_blank" rel="noopener" style="display:flex;width:100%;height:100%;min-height:360px;align-items:center;justify-content:center;padding:2rem;text-decoration:none;background:#fff;">
        <img src="https://images.squarespace-cdn.com/content/v1/61c2640cf8c3e52283ca6e7a/1641356661785-5VEK3UL667TF28IYMHSL/IMG_3288.jpg" alt="Boathouse Alameda logo" style="display:block;max-width:100%;max-height:330px;width:auto;height:auto;margin:0 auto;object-fit:contain;" loading="lazy" />
      </a>`;
  }
}

document.querySelector("#year").textContent = new Date().getFullYear();
