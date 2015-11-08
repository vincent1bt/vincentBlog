var loadCSS = require("./loadCSS");

(function() {
    document.addEventListener('DOMContentLoaded', onDOMLoad);

    function onDOMLoad() {
      var navBtn = document.querySelector("#navBtn");
      var listMenu = document.querySelector("#listMenu");

      navBtn.addEventListener("click", loadMenu);
      loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css');

      function loadMenu() {
        listMenu.classList.toggle("nav-container-list--show");
      }
    }
})()