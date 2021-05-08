(function() {
  window.onload = function() {

const alertLicense = document.querySelector('.alert-license');
    const licenseOff = document.querySelector('.license-off');
      licenseOff.onclick = function() {
          alertLicense.classList.add('hide');
      };

    (function() {

      const navmenu = document.querySelectorAll('.navmenu');

      for (var i = 0; i < navmenu.length; i++) {
        navmenu[i].addEventListener("click", function(){
          for (var k = 0; k < navmenu.length; k++) {
            navmenu[k].classList.remove('active-nav');
          }
          this.classList.add('active-nav');
        })
      }
    })();
    };
})();
