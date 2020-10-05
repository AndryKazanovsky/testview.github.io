(function() {
  window.onload = function() {

    var controller = new ScrollMagic.Controller();



    var scene = new ScrollMagic.Scene({
      triggerElement: '.block-1_h1',
    }).setClassToggle('.nav-block_black1', 'show1').addTo(controller);
    var scene11 = new ScrollMagic.Scene({
      triggerElement: '.block-2_h1',
    }).setClassToggle('.nav-block_black1', 'hide1').addTo(controller);
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.block-2_h1',
    }).setClassToggle('.nav-block_white1', 'show1').addTo(controller);
    var scene22 = new ScrollMagic.Scene({
      triggerElement: '.block-3_h1',
    }).setClassToggle('.nav-block_white1', 'hide1').addTo(controller);
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.block-3_h1',
    }).setClassToggle('.nav-block_black2', 'show1').addTo(controller);


    



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

    console.log("1111");

    (function() {
      const inpt = document.getElementsByClassName(".this-inpt");
      const menu1 = document.getElementsByClassName(".menuLi1");
      console.log(menu1);
      const menu2 = document.getElementsByClassName(".menuLi2");
      const menu3 = document.getElementsByClassName(".menuLi3");

      menu1.onclick = function() {
        // inpt.click();
        console.log("3333");
      };
      menu2.onclick = function() {
        // inpt.click();
        console.log("3333");
      };

      console.log("2222");

    })



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
