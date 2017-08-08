import postsProgress from 'js/siteWide/postsProgress';
import categoriesProgress from 'js/siteWide/categoriesProgress';

var loadCSS = require("./loadCSS");
loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css');

document.addEventListener("DOMContentLoaded", loaded);
document.addEventListener("turbolinks:load", loaded);

function loaded() {
  postsProgress();
  categoriesProgress();

  var navBtn = document.querySelector("#navBtn");
  var listMenu = document.querySelector("#listMenu");
  navBtn.addEventListener("click", loadMenu);
  function loadMenu() {
    listMenu.classList.toggle("nav-container-list--show");
  }
}
