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

    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.test1',
    }).setClassToggle('.story-photo1', 'stiky').addTo(controller);
    var scene1end = new ScrollMagic.Scene({
      triggerElement: '.test1end',
    }).setClassToggle('.story-photo1', 'unstiky').addTo(controller);

    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.test2',
    }).setClassToggle('.story-photo-2', 'stiky2').addTo(controller);
    var scene1end = new ScrollMagic.Scene({
      triggerElement: '.test2end',
    }).setClassToggle('.story-photo-2', 'unstiky2').addTo(controller);

    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.test3',
    }).setClassToggle('.story-photo-3', 'stiky3').addTo(controller);
    var scene1end = new ScrollMagic.Scene({
      triggerElement: '.test3end',
    }).setClassToggle('.story-photo-3', 'unstiky3').addTo(controller);

    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.test4',
    }).setClassToggle('.story-photo-4', 'stiky4').addTo(controller);
    var scene1end = new ScrollMagic.Scene({
      triggerElement: '.test4end',
    }).setClassToggle('.story-photo-4', 'unstiky4').addTo(controller);






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
