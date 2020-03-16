(function() {
  window.onload = function() {


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
    }



var controller = new ScrollMagic.Controller();



    var scene = new ScrollMagic.Scene({
      triggerElement: '.block-2__text',
    }).setClassToggle('.block-3__product', 'show1').addTo(controller);
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.block-2__text',
    }).setClassToggle('.block-3__left-block', 'slide1').addTo(controller);
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.block-2__text',
    }).setClassToggle('.block-3__right-block', 'slide2').addTo(controller);

    // const alertLicense = document.querySelector('.alert-license');
    // const licenseOff = document.querySelector('.license-off');
    //   licenseOff.onclick = function() {
    //       alertLicense.classList.add('hide');
    //   };
    // console.log(licenseOff);


    // var scene4 = new ScrollMagic.Scene({
    //   triggerElement: '.change-box',
    // }).setClassToggle('.container__subcontainer', 'slide1').addTo(controller);



    // scroll




    // endscroll


    var pBtn1 = document.querySelector(".p-btn1");
    var pBtn2 = document.querySelector(".p-btn2");

    var block51 = document.querySelector(".block-5-1");
    var block52 = document.querySelector(".block-5-2");

    pBtn1.onclick = function() {
      block51.classList.add("block-5-active");
      block51.classList.remove("block-5-disable");
      block52.classList.add("block-5-disable");
        block52.classList.remove("block-5-active");

        pBtn1.classList.add("active-btn");
        pBtn2.classList.remove("active-btn2");
    
    };
    pBtn2.onclick = function() {
      block51.classList.add("block-5-disable");
      block51.classList.remove("block-5-active");
        block52.classList.add("block-5-active");
        block52.classList.remove("block-5-disable");

        pBtn2.classList.add("active-btn2");
        pBtn1.classList.remove("active-btn");
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
