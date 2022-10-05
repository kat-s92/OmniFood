console.log("hello world");

const btnMobNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnMobNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-navigation-link"))
      headerEl.classList.toggle("nav-open");
  });
});

sticky - nav;
