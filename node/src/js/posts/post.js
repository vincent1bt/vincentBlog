(function() {
  document.addEventListener("DOMContentLoaded", onDomLoad);
  function onDomLoad() {
    
    var codes = document.querySelectorAll("pre code");

    Array.prototype.forEach.call(codes, function(block, i) {
      hljs.highlightBlock(block);
    });

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=497828433689008";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

})();

