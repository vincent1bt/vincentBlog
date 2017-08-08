import checkpost from "js/posts/postProgress";

(function() {
  // document.addEventListener("page:load", onDomLoad);
  document.addEventListener("DOMContentLoaded", onDomLoad);

  function onDomLoad() {
    checkpost();
    
    var codes = document.querySelectorAll("pre code");
    Array.prototype.forEach.call(codes, function(block, i) {
      hljs.highlightBlock(block);
    });

    window.fbAsyncInit = function() {
      FB.init({
        appId      : '470272653097747',
        xfbml      : true,
        version    : 'v2.5'
      });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/es_LA/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }
})();
