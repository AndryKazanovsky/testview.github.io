(function() {
  window.onload = function() {






    var controller = new ScrollMagic.Controller();



    var scene = new ScrollMagic.Scene({
      triggerElement: '.block-2_container',
    }).setClassToggle('.navigation-container', 'show1').addTo(controller);






    const btnPrep1 = document.querySelector('.btn-prep-1');
    const btnPrep2 = document.querySelector('.btn-prep-2');
    const btnPrep3 = document.querySelector('.btn-prep-3');

    const dosageContainer1 = document.querySelector('.dosage_container1');

    const dosageContainerText1 = document.querySelector('.dosage_container-text1');
    const dosageContainerText2 = document.querySelector('.dosage_container-text2');
    const dosageContainerText3 = document.querySelector('.dosage_container-text3');

    const howToText = document.querySelector('.how-to-text');

    // btnPrep1.onclick = function() {
    //   chosenIngredientContent.innerHTML = "12345678";
    // };

    btnPrep1.onclick = function() {
        dosageContainer1.classList.remove('hide');
        btnPrep1.classList.add('active-prep');
        btnPrep2.classList.remove('active-prep');
        btnPrep3.classList.remove('active-prep');
        dosageContainerText1.innerHTML = "по 10 капель 3 раза в сутки";
        dosageContainerText2.innerHTML = "по 20 капель 3 раза в сутки";
        dosageContainerText3.innerHTML = "по 30 капель 3 раза в сутки";
        howToText.innerHTML = "<span>КАПЛИ следует принимать</span> с небольшим количеством жидкости за 30 минут до еды утром, днем ​и вечером.";
    };

    btnPrep2.onclick = function() {
        dosageContainer1.classList.remove('hide');
        btnPrep2.classList.add('active-prep');
        btnPrep1.classList.remove('active-prep');
        btnPrep3.classList.remove('active-prep');
        dosageContainerText1.innerHTML = "по 2,5 мл сиропа 3 раза в сутки";
        dosageContainerText2.innerHTML = "по 5 мл сиропа 3 раза в сутки";
        dosageContainerText3.innerHTML = "по 7,5 мл сиропа 3 раза в сутки";
        howToText.innerHTML = "<span>Сироп</span> следует принимать внутрь 3 раза в сутки: утром, в обед и вечером.";
    };

    btnPrep3.onclick = function() {
        dosageContainer1.classList.add('hide');
        btnPrep3.classList.add('active-prep');
        btnPrep2.classList.remove('active-prep');
        btnPrep1.classList.remove('active-prep');
        dosageContainerText1.innerHTML = "";
        dosageContainerText2.innerHTML = "по 1 таблетке 2 раза в сутки: утром и вечером";
        dosageContainerText3.innerHTML = "по 1 таблетке 3 раза в сутки";
        howToText.innerHTML = "<span>Таблетки</span> следует принимать не разжевывая, с небольшим количеством жидкости за 30 минут до еды.";
    };


      (function() {
      
          const navmenu = document.querySelectorAll('.navlang');
      
          for (var i = 0; i < navmenu.length; i++) {
              navmenu[i].addEventListener("click", function(){
                  for (var k = 0; k < navmenu.length; k++) {
                      navmenu[k].classList.remove('active-lang');
                  }
                  this.classList.add('active-lang');
              })
          }
      })();

      (function(){

        const menuLi = document.querySelectorAll('.menuLi');
        const menu = document.querySelector('#menu');

        for (var i = 0; i < menuLi.length; i++) {
        menuLi[i].addEventListener("click", function(){
            menu.classList.add('active-li');
            // this.classList.add('active-li');
        })
      }
      })


      (function() {
      const inpt = document.querySelector(".this-inpt");
      const menu1 = document.querySelector(".menuLi1");
      console.log(menu1);
      const menu2 = document.querySelector(".menuLi2");
      const menu3 = document.querySelector(".menuLi3");

      menu1.onclick = function() {
        inpt.click();
      };
      menu2.onclick = function() {
        inpt.click();
      };
      menu3.onclick = function() {
        inpt.click();
      };

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
