(function() {
    document.addEventListener('DOMContentLoaded', onDOMLoad);

    function onDOMLoad() {
      var navBtn = document.querySelector("#navBtn");
      var listMenu = document.querySelector("#listMenu");

      navBtn.addEventListener("click", loadMenu);
      function loadMenu() {
        listMenu.classList.toggle("nav-container-list--show");
      }
    }
})()