let elements = document.querySelectorAll(".js .cards .element");
let img = document.querySelector(".js img");

elements.forEach((ele) => {
  ele.onclick = () => {
    elements.forEach((e) => {
      e.classList.remove("active");
    });
    ele.classList.add("active");
    img.classList.toggle("active");
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burgerMenu");
  const navBar = document.querySelector(".nav-bar");

  burgerMenu.addEventListener("click", function () {
    navBar.classList.toggle("open");
  });
});
