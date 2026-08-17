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

  const celebrationSlide = document.createElement("figure");
  celebrationSlide.className = "gallery-slide";
  celebrationSlide.dataset.slide = "";
  celebrationSlide.setAttribute("aria-hidden", "true");
  celebrationSlide.innerHTML = `
    <img
      src="assets/gallery/2026-championship-celebration-bar.jpg"
      alt="The Boathouse Beers team celebrating together at the bar after winning the 2026 championship"
      loading="lazy"
    />
    <figcaption>Championship celebration</figcaption>
  `;
  galleryStage.appendChild(celebrationSlide);

  const celebrationDot = document.createElement("button");
  celebrationDot.type = "button";
  celebrationDot.dataset.galleryDot = "2";
  celebrationDot.setAttribute("aria-label", "Show photo 3");
  galleryDots.appendChild(celebrationDot);

  const fall2025Slide = document.createElement("figure");
  fall2025Slide.className = "gallery-slide";
  fall2025Slide.dataset.slide = "";
  fall2025Slide.setAttribute("aria-hidden", "true");
  fall2025Slide.innerHTML = `
    <img
      src="assets/gallery/fall-2025-team-photo.jpg"
      alt="The Boathouse Beers Fall 2025 team posing together in matching jerseys"
      loading="lazy"
    />
    <figcaption>Fall 2025 team</figcaption>
  `;
  galleryStage.appendChild(fall2025Slide);

  const fall2025Dot = document.createElement("button");
  fall2025Dot.type = "button";
  fall2025Dot.dataset.galleryDot = "3";
  fall2025Dot.setAttribute("aria-label", "Show photo 4");
  galleryDots.appendChild(fall2025Dot);

  const banquet2025Slide = document.createElement("figure");
  banquet2025Slide.className = "gallery-slide";
  banquet2025Slide.dataset.slide = "";
  banquet2025Slide.setAttribute("aria-hidden", "true");
  banquet2025Slide.innerHTML = `
    <img
      src="assets/gallery/2025-season-banquet-cavalier.jpg"
      alt="Boathouse Beers teammates together after dinner at The Cavalier in San Francisco for the 2025 season banquet"
      loading="lazy"
    />
    <figcaption>2025 season banquet · The Cavalier, San Francisco</figcaption>
  `;
  galleryStage.appendChild(banquet2025Slide);

  const banquet2025Dot = document.createElement("button");
  banquet2025Dot.type = "button";
  banquet2025Dot.dataset.galleryDot = "4";
  banquet2025Dot.setAttribute("aria-label", "Show photo 5");
  galleryDots.appendChild(banquet2025Dot);

  const summerBanquetSlide = document.createElement("figure");
  summerBanquetSlide.className = "gallery-slide";
  summerBanquetSlide.dataset.slide = "";
  summerBanquetSlide.setAttribute("aria-hidden", "true");
  summerBanquetSlide.innerHTML = `
    <img
      src="assets/gallery/2025-summer-banquet.svg"
      alt="Boathouse Beers teammates and friends gathered outdoors at night during the 2025 summer banquet"
      loading="lazy"
    />
    <figcaption>Summer 2025 banquet</figcaption>
  `;
  galleryStage.appendChild(summerBanquetSlide);

  const summerBanquetDot = document.createElement("button");
  summerBanquetDot.type = "button";
  summerBanquetDot.dataset.galleryDot = "5";
  summerBanquetDot.setAttribute("aria-label", "Show photo 6");
  galleryDots.appendChild(summerBanquetDot);

  const topgolf2024Slide = document.createElement("figure");
  topgolf2024Slide.className = "gallery-slide";
  topgolf2024Slide.dataset.slide = "";
  topgolf2024Slide.setAttribute("aria-hidden", "true");
  topgolf2024Slide.innerHTML = `
    <img
      src="assets/gallery/2024-banquet-topgolf.jpg"
      alt="Boathouse Beers teammates and friends together at Topgolf for the 2024 team banquet"
      loading="lazy"
    />
    <figcaption>2024 banquet · Topgolf</figcaption>
  `;
  galleryStage.appendChild(topgolf2024Slide);

  const topgolf2024Dot = document.createElement("button");
  topgolf2024Dot.type = "button";
  topgolf2024Dot.dataset.galleryDot = "6";
  topgolf2024Dot.setAttribute("aria-label", "Show photo 7");
  galleryDots.appendChild(topgolf2024Dot);

  const banquet2023Slide = document.createElement("figure");
  banquet2023Slide.className = "gallery-slide";
  banquet2023Slide.dataset.slide = "";
  banquet2023Slide.setAttribute("aria-hidden", "true");
  banquet2023Slide.innerHTML = `
    <img
      src="assets/gallery/2023-first-season-banquet.svg"
      alt="Boathouse Beers teammates together at the 2023 banquet after the team's first season"
      loading="lazy"
    />
    <figcaption>2023 banquet · After our first season</figcaption>
  `;
  galleryStage.appendChild(banquet2023Slide);

  const banquet2023Dot = document.createElement("button");
  banquet2023Dot.type = "button";
  banquet2023Dot.dataset.galleryDot = "7";
  banquet2023Dot.setAttribute("aria-label", "Show photo 8");
  galleryDots.appendChild(banquet2023Dot);

  if (galleryCount) {
    galleryCount.innerHTML = '<span data-gallery-current>1</span> / 8';
  }

  const slides = Array.from(gallery.querySelectorAll("[data-slide]"));
  const dots = Array.from(gallery.querySelectorAll("[data-gallery-dot]"));
  const currentLabel = gallery.querySelector("[data-gallery-current]");
  const previousButton = gallery.querySelector("[data-gallery-prev]");
  const nextButton = gallery.querySelector("[data-gallery-next]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeSlide = 0;
  let autoplayTimer;
  let touchStartX = 0;

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
    currentLabel.textContent = String(activeSlide + 1);
  };

  const stopAutoplay = () => window.clearInterval(autoplayTimer);
  const startAutoplay = () => {
    if (!reducedMotion) {
      stopAutoplay();
      autoplayTimer = window.setInterval(() => showSlide(activeSlide + 1), 6000);
    }
  };

  previousButton.addEventListener("click", () => {
    showSlide(activeSlide - 1);
    startAutoplay();
  });
  nextButton.addEventListener("click", () => {
    showSlide(activeSlide + 1);
    startAutoplay();
  });
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.galleryDot));
      startAutoplay();
    });
  });

  gallery.addEventListener("mouseenter", stopAutoplay);
  gallery.addEventListener("mouseleave", startAutoplay);
  gallery.addEventListener("focusin", stopAutoplay);
  gallery.addEventListener("focusout", startAutoplay);
  gallery.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showSlide(activeSlide - 1);
    if (event.key === "ArrowRight") showSlide(activeSlide + 1);
  });
  gallery.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  gallery.addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) showSlide(activeSlide + (distance < 0 ? 1 : -1));
  }, { passive: true });

  startAutoplay();
}

const cavalierBanquetCard = document.querySelector(".banquet-card.banquet-latest");
if (cavalierBanquetCard && !cavalierBanquetCard.querySelector("img")) {
  const banquetPhoto = document.createElement("img");
  banquetPhoto.src = "assets/gallery/2025-season-banquet-cavalier.jpg";
  banquetPhoto.alt = "Boathouse Beers teammates together after dinner at The Cavalier in San Francisco for the 2025 season banquet";
  banquetPhoto.loading = "lazy";
  banquetPhoto.style.width = "100%";
  banquetPhoto.style.aspectRatio = "4 / 3";
  banquetPhoto.style.objectFit = "cover";
  banquetPhoto.style.borderRadius = "14px";
  banquetPhoto.style.marginBottom = "1rem";
  cavalierBanquetCard.prepend(banquetPhoto);
}

const coachBackyardBanquetCard = Array.from(document.querySelectorAll(".banquet-card")).find((card) =>
  card.querySelector("h3")?.textContent.includes("Coach’s backyard")
);
if (coachBackyardBanquetCard && !coachBackyardBanquetCard.querySelector("img")) {
  const coachBackyardPhoto = document.createElement("img");
  coachBackyardPhoto.src = "assets/gallery/2025-summer-banquet.svg";
  coachBackyardPhoto.alt = "Boathouse Beers teammates and friends gathered outdoors at night during the Summer 2025 banquet in the coach's backyard";
  coachBackyardPhoto.loading = "lazy";
  coachBackyardPhoto.style.width = "100%";
  coachBackyardPhoto.style.aspectRatio = "4 / 3";
  coachBackyardPhoto.style.objectFit = "cover";
  coachBackyardPhoto.style.borderRadius = "14px";
  coachBackyardPhoto.style.marginBottom = "1rem";
  coachBackyardBanquetCard.prepend(coachBackyardPhoto);
}

const topgolfBanquetCard = Array.from(document.querySelectorAll(".banquet-card")).find((card) =>
  card.querySelector("h3")?.textContent.includes("Topgolf")
);
if (topgolfBanquetCard && !topgolfBanquetCard.querySelector("img")) {
  const topgolfPhoto = document.createElement("img");
  topgolfPhoto.src = "assets/gallery/2024-banquet-topgolf.jpg";
  topgolfPhoto.alt = "Boathouse Beers teammates and friends together at Topgolf for the 2024 team banquet";
  topgolfPhoto.loading = "lazy";
  topgolfPhoto.style.width = "100%";
  topgolfPhoto.style.aspectRatio = "4 / 3";
  topgolfPhoto.style.objectFit = "cover";
  topgolfPhoto.style.borderRadius = "14px";
  topgolfPhoto.style.marginBottom = "1rem";
  topgolfBanquetCard.prepend(topgolfPhoto);
}

const firstSeasonBanquetCard = Array.from(document.querySelectorAll(".banquet-card")).find((card) =>
  card.querySelector("h3")?.textContent.includes("Boathouse Tavern")
);
if (firstSeasonBanquetCard && !firstSeasonBanquetCard.querySelector("img")) {
  const firstSeasonPhoto = document.createElement("img");
  firstSeasonPhoto.src = "assets/gallery/2023-first-season-banquet.svg";
  firstSeasonPhoto.alt = "Boathouse Beers teammates together at the 2023 banquet after the team's first season";
  firstSeasonPhoto.loading = "lazy";
  firstSeasonPhoto.style.width = "100%";
  firstSeasonPhoto.style.aspectRatio = "4 / 3";
  firstSeasonPhoto.style.objectFit = "cover";
  firstSeasonPhoto.style.borderRadius = "14px";
  firstSeasonPhoto.style.marginBottom = "1rem";
  firstSeasonBanquetCard.prepend(firstSeasonPhoto);
}

document.querySelector("#year").textContent = new Date().getFullYear();
