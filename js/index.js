// Your code goes here
const body = document.querySelector("body");
const header = document.querySelector("header");
const navLinks = document.querySelectorAll("nav .nav-link");
const btns = document.querySelectorAll("section .btn");
const imgs = document.querySelectorAll("img");
const ps = document.querySelectorAll("p");
const hs = document.querySelectorAll("h2");

//load
body.style.opacity = "0";
window.addEventListener("load", () => {
  body.style.opacity = "initial";
  body.style.transition = "all 4s";
});

//resize
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    body.style.backgroundColor = "yellow";
  } else {
    body.style.backgroundColor = "initial";
  }
});

//scroll
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  if (scrollPos > 350) {
    header.style.display = "none";
  } else {
    header.style.display = "inherit";
  }
});

//mouseover & mouseout
navLinks.forEach((link) => {
  link.style.padding = ".5rem 1rem";

  link.addEventListener("mouseover", () => {
    link.style.backgroundColor = "lavender";
    link.style.transform = "scale(1.2)";
    link.style.borderRadius = "3rem";
    link.style.transition = "all .6s";
  });

  link.addEventListener("mouseout", () => {
    link.style.backgroundColor = "initial";
    link.style.transform = "initial";
    link.style.borderRadius = "initial";
  });
});

//dblclick
btns.forEach((btn) => {
  btn.addEventListener("dblclick", (event) => {
    event.target.textContent = "Are we there Yet?";
    event.target.style.backgroundColor = "blue";
    btn.style.transition = "all .6s";
  });
});

//mouseenter
imgs.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.2)";
    img.style.boxShadow = "0px 4px 16px blue";
  });
});

//click
ps.forEach((p) => {
  p.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "purple";
  });
});

//keydown
hs.forEach((h) => {
  h.addEventListener("keydown", (event) => {
    if (event.keyCode === 65 || event.keyCode === 97) {
      h.style.size++;
    }
  });
});
