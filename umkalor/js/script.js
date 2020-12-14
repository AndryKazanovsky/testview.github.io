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
    const productImg = document.querySelector('.product-img');

    const dosageContainerText1 = document.querySelector('.dosage_container-text1');
    const dosageContainerText2 = document.querySelector('.dosage_container-text2');
    const dosageContainerText3 = document.querySelector('.dosage_container-text3');

    const howToText = document.querySelector('.how-to-text');

    // btnPrep1.onclick = function() {
    //   chosenIngredientContent.innerHTML = "12345678";
    // };

    btnPrep1.onclick = function() {
        productImg.classList.add('drops');
        productImg.classList.remove('syrop');
        productImg.classList.remove('tab-img');
        dosageContainer1.classList.remove('hide');
        btnPrep1.classList.add('active-prep1');
        btnPrep2.classList.remove('active-prep2');
        btnPrep3.classList.remove('active-prep3');
        dosageContainerText1.innerHTML = "по 10 крапель 3 рази на добу";
        dosageContainerText2.innerHTML = "по 20 крапель 3 рази на добу";
        dosageContainerText3.innerHTML = "по 30 крапель 3 рази на добу";
        howToText.innerHTML = "<span>КАПЛИ слід приймати </span> з невеликою кількістю рідини за 30 хвилин до їди вранці, вдень і ввечері.";
    };

    btnPrep2.onclick = function() {
        productImg.classList.remove('drops');
        productImg.classList.add('syrop');
        productImg.classList.remove('tab-img');
        dosageContainer1.classList.remove('hide');
        btnPrep2.classList.add('active-prep2');
        btnPrep1.classList.remove('active-prep1');
        btnPrep3.classList.remove('active-prep3');
        dosageContainerText1.innerHTML = "по 2,5 мл сиропу 3 рази на добу";
        dosageContainerText2.innerHTML = "по 5 мл сиропу 3 рази на добу";
        dosageContainerText3.innerHTML = "по 7,5 мл сиропу 3 рази на добу";
        howToText.innerHTML = "<span>Сироп</span> слід приймати всередину 3 рази на добу: вранці, в обід і ввечері.";
    };

    btnPrep3.onclick = function() {
        productImg.classList.remove('drops');
        productImg.classList.remove('syrop');
        productImg.classList.add('tab-img');
        dosageContainer1.classList.add('hide');
        btnPrep3.classList.add('active-prep3');
        btnPrep2.classList.remove('active-prep2');
        btnPrep1.classList.remove('active-prep1');
        dosageContainerText1.innerHTML = "";
        dosageContainerText2.innerHTML = "по 1 таблетці 2 рази на добу: вранці та ввечері";
        dosageContainerText3.innerHTML = "таблетці 3 рази на добу";
        howToText.innerHTML = "<span>Таблетки</span> слід приймати не розжовуючи, з невеликою кількістю рідини за 30 хвилин до їди.";
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
