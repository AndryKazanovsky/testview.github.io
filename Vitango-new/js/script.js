(function() {
  window.onload = function() {



    (function() {
      const navmenu = document.querySelectorAll('.navmenu');

      for (var i = 0; i < navmenu.length; i++) {
        navmenu[i].addEventListener('click', function() {
          for (var k = 0; k < navmenu.length; k++) {
            navmenu[k].classList.remove('active');
          }
          this.classList.add('active');
        });
      }
    })();
    };
})();
