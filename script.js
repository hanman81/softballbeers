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

document.querySelector("#year").textContent = new Date().getFullYear();
