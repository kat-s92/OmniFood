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

///// Sticky Navigation /////
const heroSectionEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky-nav");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky-nav");
    }
  },
  {
    root: null, //in the viewport, null=viewport
    threshold: 0, //will fire one hero-section is 0% in the view port, ie none
    rootMargin: "-80px",
  }
);
obs.observe(heroSectionEl);
