let btn = document.querySelector("#btn");
console.log(btn);
window.addEventListener("scroll", function () {
  if (this.scrollY >= 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
btn.addEventListener("click", function () {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
let head = document.querySelector(".head");
let para = document.querySelector(".totti");
head.onclick = function () {
  para.classList.toggle("toggle");
};
let heads = document.querySelector(".heads");
let paras = document.querySelector(".tottis");
heads.onclick = function () {
  paras.classList.toggle("toggle");
};
let star = document.querySelectorAll("#special")[0];
let star1 = document.querySelectorAll("#special")[1];
let star2 = document.querySelectorAll("#special")[2];
star.onclick = function () {
  star.classList.toggle("dot");
};
star1.onclick = function () {
  star1.classList.toggle("dot");
};
star2.onclick = function () {
  star2.classList.toggle("dot");
};
console.log(star)