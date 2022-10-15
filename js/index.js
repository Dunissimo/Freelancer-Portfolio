const navButton = document.querySelector(".header__nav-button");
const nav = document.querySelector(".header__nav");
const img = document.querySelector(".header__nav-button img");
const links = document.querySelectorAll(".header__nav-list li");

links.forEach((link) =>
  link.addEventListener("click", () =>
    alert("Многостраничность не реализована. Возможно, появится в будущем!")
  )
);

navButton.addEventListener("click", () => {
  if (nav.classList.toggle("open")) {
    img.src = "../img/nav/close.svg";
  } else {
    img.src = "../img/nav/open.svg";
  }
});

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("show");
    }
  });
}

let observer = new IntersectionObserver(onEntry, { threshold: 0.2 });
let elements = document.querySelectorAll(".toAnim");
elements.forEach((item) => observer.observe(item));
