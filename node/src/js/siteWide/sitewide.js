var loadCSS = require("./loadCSS");
loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css');
document.addEventListener("page:load", loaded)
document.addEventListener("DOMContentLoaded", loaded)

function loaded() {
  var navBtn = document.querySelector("#navBtn");
  var listMenu = document.querySelector("#listMenu");
  navBtn.addEventListener("click", loadMenu);
  function loadMenu() {
    listMenu.classList.toggle("nav-container-list--show");
  }
}
