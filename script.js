document.addEventListener('DOMContentLoaded',function(){
    const headlineText = "Welcome to my portfolio!";

     function StartTextAnimation(i) {
      if (i < headlineText.length) {
       typeWriter(headlineText, 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }

    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
        document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
    }

    StartTextAnimation(0);
  });
