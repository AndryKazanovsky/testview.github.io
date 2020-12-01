(function() {
  window.onload = function() {








    



      // (function() {
      //
      //     const navmenu = document.querySelectorAll('.navlang');
      //
      //     for (var i = 0; i < navmenu.length; i++) {
      //         navmenu[i].addEventListener("click", function(){
      //             for (var k = 0; k < navmenu.length; k++) {
      //                 navmenu[k].classList.remove('active-lang');
      //             }
      //             this.classList.add('active-lang');
      //         })
      //     }
      // })();

      // (function(){

      //   const menuLi = document.querySelectorAll('.menuLi');
      //   const menu = document.querySelector('#menu');

      //   for (var i = 0; i < menuLi.length; i++) {
      //   menuLi[i].addEventListener("click", function(){
      //       menu.classList.add('active-li');
      //       // this.classList.add('active-li');
      //   })
      // }
      // })


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
