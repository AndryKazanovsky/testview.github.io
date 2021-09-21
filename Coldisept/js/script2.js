(function() {
  window.onload = function() {

      const inpt = document.querySelector(".this-inpt");
      const menu1 = document.querySelector(".menuLi1");
      const menu2 = document.querySelector(".menuLi2");
      const menu3 = document.querySelector(".menuLi3");
      const menu4 = document.querySelector(".menuLi4");

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




      var controller = new ScrollMagic.Controller();



    var scene = new ScrollMagic.Scene({
      triggerElement: '.container-3',
    }).setClassToggle('.outer-navigation-container', 'show1').addTo(controller);
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.container-3',
    }).setClassToggle('.logo-container', 'show3').addTo(controller);







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


    function popupOpen(){
          function c(){e.classList.add("visible")
      }
      function n(){
          e.classList.remove("visible")
      }
      function o(){
          n(),setTimeout(function()
          {alert("DONE")},200)
      }
      var e=document.querySelector(".popup"),
      t=document.querySelectorAll("[data-action]");
      t.forEach(function(e){
          switch(e.dataset.action)
          {case"open":e.onclick=c;break;case"close":e.onclick=n;
          break;
      }})}


      popupOpen()
    

}})();

