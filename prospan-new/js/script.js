(function() {
  window.onload = function() {


    (function() {

        const toggleBtns = document.querySelectorAll('.toggle-btn');

        for (var i = 0; i < toggleBtns.length; i++) {
          toggleBtns[i].addEventListener("click", function () {
            for (var k = 0; k < toggleBtns.length; k++) {
              toggleBtns[k].classList.remove('active-btn');
            }
            this.classList.add('active-btn');
          })
        }

    })();


    const dropsText = document.querySelectorAll('.drops-text');
    const siropText = document.querySelectorAll('.sirop-text');
    const siropBtn = document.querySelector('.sirop-btn');
    const dropsBtn = document.querySelector('.drops-btn');

    siropBtn.addEventListener("click", function () {
      for (var k = 0; k < dropsText.length; k++) {
        dropsText[k].classList.add('active-drops');
      }
      for (var j = 0; j < siropText.length; j++) {
        siropText[j].classList.add('hidden');
      }
    });
    dropsBtn.addEventListener("click", function () {
      for (var k = 0; k < dropsText.length; k++) {
        dropsText[k].classList.remove('active-drops');
      }
      for (var j = 0; j < siropText.length; j++) {
        siropText[j].classList.remove('hidden');
      }
    });

    



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
