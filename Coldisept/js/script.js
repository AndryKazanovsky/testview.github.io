(function() {
  window.onload = function() {

      const inpt = document.querySelector(".this-inpt");
      const menu1 = document.querySelector(".menuLi1");
      const menu2 = document.querySelector(".menuLi2");
      const menu3 = document.querySelector(".menuLi3");
      const menu4 = document.querySelector(".menuLi4");
      const menu5 = document.querySelector(".menuLi5");

      menu1.onclick = function() {
        inpt.click();
      };
      menu2.onclick = function() {
        inpt.click();
      };
      menu3.onclick = function() {
        inpt.click();
      };
      menu4.onclick = function() {
        inpt.click();
      };
      menu5.onclick = function() {
        inpt.click();
      };



      var controller = new ScrollMagic.Controller();



    var scene = new ScrollMagic.Scene({
      triggerElement: '.container-3',
    }).setClassToggle('.outer-navigation-container', 'show1').addTo(controller);
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.container-3',
    }).setClassToggle('.logo-container', 'show2').addTo(controller);






    // (function() {

    //   const navmenu = document.querySelectorAll('.navmenu');

    //   for (var i = 0; i < navmenu.length; i++) {
    //     navmenu[i].addEventListener("click", function(){
    //       for (var k = 0; k < navmenu.length; k++) {
    //         navmenu[k].classList.remove('active-nav');
    //       }
    //       this.classList.add('active-nav');
    //     })
    //   }
    // });



     var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active-acc");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    };

}})();
