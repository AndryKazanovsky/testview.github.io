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



    // popup////////

      // var popup = document.querySelector('.popup');
      var popup1 = document.querySelector('.popup1');
      var popup2 = document.querySelector('.popup2');
      var popup3 = document.querySelector('.popup3');
      var actionElements = document.querySelectorAll('[data-action]');

      actionElements.forEach(function(elem) {
          switch (elem.dataset.action) {
              case 'open1':
                  elem.onclick = openPopup1;
                  break;
              case 'open2':
                  elem.onclick = openPopup2;
                  break;
              case 'open3':
                  elem.onclick = openPopup3;
                  break;
              case 'close1':
                  elem.onclick = closePopup1;
                  break;
              case 'close2':
                  elem.onclick = closePopup2;
                  break;
              case 'close3':
                  elem.onclick = closePopup3;
                  break;
              default:
                  break;
          }
      });

      function openPopup1() {
          popup1.classList.add('visible');
      }
      function openPopup2() {
          popup2.classList.add('visible');
      }
      function openPopup3() {
          popup3.classList.add('visible');
      }
      function closePopup1() {
          popup1.classList.remove('visible');
      }
      function closePopup2() {
          popup2.classList.remove('visible');
      }
      function closePopup3() {
          popup3.classList.remove('visible');
      }


      // popup/////






//////// block-4

      // buttons

      const btn1 = document.querySelector('.keybtn1');
      const btn2 = document.querySelector('.keybtn2');
      const btn3 = document.querySelector('.keybtn3');
      const btn4 = document.querySelector('.keybtn4');
      const btn5 = document.querySelector('.keybtn5');


      // counter

      const counter1 = document.querySelector('.counter1');
      const counter2 = document.querySelector('.counter2');
      const counter3 = document.querySelector('.counter3');
      const counter4 = document.querySelector('.counter4');
      const counter5 = document.querySelector('.counter5');

      const rightArrow1 = document.querySelector('.right-arrow1');
      const leftArrow2 = document.querySelector('.left-arrow2');
      const rightArrow2 = document.querySelector('.right-arrow2');
      const leftArrow3 = document.querySelector('.left-arrow3');
      const rightArrow3 = document.querySelector('.right-arrow3');
      const leftArrow4 = document.querySelector('.left-arrow4');
      const rightArrow4 = document.querySelector('.right-arrow4');
      const leftArrow5 = document.querySelector('.left-arrow5');

      // end counter


      const block4Img = document.querySelector('.block-4__container-img');
      const block4Cont = document.querySelector('.block-4__container-content');

      btn1.onclick = function() {
          btn1.classList.add('block-4__btn-active');
          btn2.classList.remove('block-4__btn-active');
          btn3.classList.remove('block-4__btn-active');
          btn4.classList.remove('block-4__btn-active');
          btn5.classList.remove('block-4__btn-active');
          block4Img.classList.add('block-4__container-img1');
          block4Img.classList.remove('block-4__container-img2');
          block4Img.classList.remove('block-4__container-img3');
          block4Img.classList.remove('block-4__container-img4');
          block4Img.classList.remove('block-4__container-img5');

          block4Cont.innerHTML = '<p><b>Atropinum sulfuricum</b> – жедел ағымында қабынуға қарсы әсері бар, жұтыну кезіндегі тамақтың ауруын жеңілдетеді, көмекей бездерінің қызаруы мен ісінуін жояды, безгекті азайтады³</p>';

          counter1.classList.remove('hidden');
          counter2.classList.add('hidden');
          counter3.classList.add('hidden');
          counter4.classList.add('hidden');
          counter5.classList.add('hidden');

      };

      rightArrow1.onclick = function () {
          btn2.classList.add('block-4__btn-active');
          btn1.classList.remove('block-4__btn-active');
          btn3.classList.remove('block-4__btn-active');
          btn4.classList.remove('block-4__btn-active');
          btn5.classList.remove('block-4__btn-active');
          block4Img.classList.add('block-4__container-img2');
          block4Img.classList.remove('block-4__container-img1');
          block4Img.classList.remove('block-4__container-img3');
          block4Img.classList.remove('block-4__container-img4');
          block4Img.classList.remove('block-4__container-img5');

          block4Cont.innerHTML = '<p><b>Hepar sulfuris</b>  – созылмалы барысында қабынуға қарсы әсері бар. Лакундарды патологиялық құрамнан тазартуға, іріңдердің жазылуына көмектеседі³</p>';

          counter2.classList.remove('hidden');
          counter1.classList.add('hidden');
          counter3.classList.add('hidden');
          counter4.classList.add('hidden');
          counter5.classList.add('hidden');
      };

      btn2.onclick = function() {
          btn2.classList.add('block-4__btn-active');
          btn1.classList.remove('block-4__btn-active');
          btn3.classList.remove('block-4__btn-active');
          btn4.classList.remove('block-4__btn-active');
          btn5.classList.remove('block-4__btn-active');
          block4Img.classList.add('block-4__container-img2');
          block4Img.classList.remove('block-4__container-img1');
          block4Img.classList.remove('block-4__container-img3');
          block4Img.classList.remove('block-4__container-img4');
          block4Img.classList.remove('block-4__container-img5');

          block4Cont.innerHTML = '<p><b>Hepar sulfuris</b>  – созылмалы барысында қабынуға қарсы әсері бар. Лакундарды патологиялық құрамнан тазартуға, іріңдердің жазылуына көмектеседі³</p>';

          counter2.classList.remove('hidden');
          counter1.classList.add('hidden');
          counter3.classList.add('hidden');
          counter4.classList.add('hidden');
          counter5.classList.add('hidden');

      };

      leftArrow2.onclick = function () {
          btn1.classList.add('block-4__btn-active');
          btn2.classList.remove('block-4__btn-active');
          btn3.classList.remove('block-4__btn-active');
          btn4.classList.remove('block-4__btn-active');
          btn5.classList.remove('block-4__btn-active');
          block4Img.classList.add('block-4__container-img1');
          block4Img.classList.remove('block-4__container-img2');
          block4Img.classList.remove('block-4__container-img3');
          block4Img.classList.remove('block-4__container-img4');
          block4Img.classList.remove('block-4__container-img5');

          block4Cont.innerHTML = '<p><b>Atropinum sulfuricum</b> – жедел ағымында қабынуға қарсы әсері бар, жұтыну кезіндегі тамақтың ауруын жеңілдетеді, көмекей бездерінің қызаруы мен ісінуін жояды, безгекті азайтады³</p>';

          counter1.classList.remove('hidden');
          counter2.classList.add('hidden');
          counter3.classList.add('hidden');
          counter4.classList.add('hidden');
          counter5.classList.add('hidden');
      };

      rightArrow2.onclick = function () {
          btn3.classList.add('block-4__btn-active');
          btn2.classList.remove('block-4__btn-active');
          btn1.classList.remove('block-4__btn-active');
          btn4.classList.remove('block-4__btn-active');
          btn5.classList.remove('block-4__btn-active');
          block4Img.classList.add('block-4__container-img3');
          block4Img.classList.remove('block-4__container-img2');
          block4Img.classList.remove('block-4__container-img1');
          block4Img.classList.remove('block-4__container-img4');
          block4Img.classList.remove('block-4__container-img5');

          block4Cont.innerHTML = '<p><b>Kalium bichromicum</b>  –  жұтқыншақтың ісінуі мен қабынуын жеңілдетеді, күйдіру сезімі мен тітіркенуді жояды. көмекей бездерінің үлкеймеуіне көмектеседі³</p>';

          counter3.classList.remove('hidden');
          counter2.classList.add('hidden');
          counter1.classList.add('hidden');
          counter4.classList.add('hidden');
          counter5.classList.add('hidden');
      };

      btn3.onclick = function() {
          btn3.classList.add('block-4__btn-active');
          btn2.classList.remove('block-4__btn-active');
          btn1.classList.remove('block-4__btn-active');
          btn4.classList.remove('block-4__btn-active');
          btn5.classList.remove('block-4__btn-active');
          block4Img.classList.add('block-4__container-img3');
          block4Img.classList.remove('block-4__container-img2');
          block4Img.classList.remove('block-4__container-img1');
          block4Img.classList.remove('block-4__container-img4');
          block4Img.classList.remove('block-4__container-img5');

          block4Cont.innerHTML = '<p><b>Kalium bichromicum</b>  –  жұтқыншақтың ісінуі мен қабынуын жеңілдетеді, күйдіру сезімі мен тітіркенуді жояды. көмекей бездерінің үлкеймеуіне көмектеседі³</p>';

          counter3.classList.remove('hidden');
          counter2.classList.add('hidden');
          counter1.classList.add('hidden');
          counter4.classList.add('hidden');
          counter5.classList.add('hidden');

      };

      leftArrow3.onclick = function () {
          btn2.classList.add('block-4__btn-active');
          btn1.classList.remove('block-4__btn-active');
          btn3.classList.remove('block-4__btn-active');
          btn4.classList.remove('block-4__btn-active');
          btn5.classList.remove('block-4__btn-active');
          block4Img.classList.add('block-4__container-img2');
          block4Img.classList.remove('block-4__container-img1');
          block4Img.classList.remove('block-4__container-img3');
          block4Img.classList.remove('block-4__container-img4');
          block4Img.classList.remove('block-4__container-img5');

          block4Cont.innerHTML = '<p><b>Hepar sulfuris</b>  – созылмалы барысында қабынуға қарсы әсері бар. Лакундарды патологиялық құрамнан тазартуға, іріңдердің жазылуына көмектеседі³</p>';

          counter2.classList.remove('hidden');
          counter1.classList.add('hidden');
          counter3.classList.add('hidden');
          counter4.classList.add('hidden');
          counter5.classList.add('hidden');
      };

      rightArrow3.onclick = function () {
          btn4.classList.add('block-4__btn-active');
          btn2.classList.remove('block-4__btn-active');
          btn3.classList.remove('block-4__btn-active');
          btn1.classList.remove('block-4__btn-active');
          btn5.classList.remove('block-4__btn-active');
          block4Img.classList.add('block-4__container-img4');
          block4Img.classList.remove('block-4__container-img2');
          block4Img.classList.remove('block-4__container-img3');
          block4Img.classList.remove('block-4__container-img1');
          block4Img.classList.remove('block-4__container-img5');

          block4Cont.innerHTML = '<p><b>Mercurius bijodatus</b>  – лимфа түйіндерінің ісінуі мен қабынуын жеңілдетеді, лимфа дренажын жақсартады, лакундардыі тазартуға, көмекей бездерінің үлкеймеуіне көмектеседі³</p>';

          counter4.classList.remove('hidden');
          counter2.classList.add('hidden');
          counter3.classList.add('hidden');
          counter1.classList.add('hidden');
          counter5.classList.add('hidden');
      };

      btn4.onclick = function() {
          btn4.classList.add('block-4__btn-active');
          btn2.classList.remove('block-4__btn-active');
          btn3.classList.remove('block-4__btn-active');
          btn1.classList.remove('block-4__btn-active');
          btn5.classList.remove('block-4__btn-active');
          block4Img.classList.add('block-4__container-img4');
          block4Img.classList.remove('block-4__container-img2');
          block4Img.classList.remove('block-4__container-img3');
          block4Img.classList.remove('block-4__container-img1');
          block4Img.classList.remove('block-4__container-img5');

          block4Cont.innerHTML = '<p><b>Mercurius bijodatus</b>  – лимфа түйіндерінің ісінуі мен қабынуын жеңілдетеді, лимфа дренажын жақсартады, лакундардыі тазартуға, көмекей бездерінің үлкеймеуіне көмектеседі³</p>';

          counter4.classList.remove('hidden');
          counter2.classList.add('hidden');
          counter3.classList.add('hidden');
          counter1.classList.add('hidden');
          counter5.classList.add('hidden');

      };

      leftArrow4.onclick = function () {
          btn3.classList.add('block-4__btn-active');
          btn2.classList.remove('block-4__btn-active');
          btn1.classList.remove('block-4__btn-active');
          btn4.classList.remove('block-4__btn-active');
          btn5.classList.remove('block-4__btn-active');
          block4Img.classList.add('block-4__container-img3');
          block4Img.classList.remove('block-4__container-img2');
          block4Img.classList.remove('block-4__container-img1');
          block4Img.classList.remove('block-4__container-img4');
          block4Img.classList.remove('block-4__container-img5');

          block4Cont.innerHTML = '<p><b>Kalium bichromicum</b>  –  жұтқыншақтың ісінуі мен қабынуын жеңілдетеді, күйдіру сезімі мен тітіркенуді жояды. көмекей бездерінің үлкеймеуіне көмектеседі³</p>';

          counter3.classList.remove('hidden');
          counter2.classList.add('hidden');
          counter1.classList.add('hidden');
          counter4.classList.add('hidden');
          counter5.classList.add('hidden');
      };

      rightArrow4.onclick = function () {
          btn5.classList.add('block-4__btn-active');
          btn2.classList.remove('block-4__btn-active');
          btn3.classList.remove('block-4__btn-active');
          btn4.classList.remove('block-4__btn-active');
          btn1.classList.remove('block-4__btn-active');
          block4Img.classList.add('block-4__container-img5');
          block4Img.classList.remove('block-4__container-img2');
          block4Img.classList.remove('block-4__container-img3');
          block4Img.classList.remove('block-4__container-img4');
          block4Img.classList.remove('block-4__container-img1');

          block4Cont.innerHTML = '<p><b>Silicea</b>  – дененің қарсылығын нығайтуға және жергілікті иммунитетті жақсартуға көмектеседі. Ол сауығуды тездетеді,көмекей бездерін қалпына келтіреді және қайталанатын аурулардың алдын алады³</p>';

          counter5.classList.remove('hidden');
          counter2.classList.add('hidden');
          counter3.classList.add('hidden');
          counter4.classList.add('hidden');
          counter1.classList.add('hidden');
      };

      btn5.onclick = function() {
          btn5.classList.add('block-4__btn-active');
          btn2.classList.remove('block-4__btn-active');
          btn3.classList.remove('block-4__btn-active');
          btn4.classList.remove('block-4__btn-active');
          btn1.classList.remove('block-4__btn-active');
          block4Img.classList.add('block-4__container-img5');
          block4Img.classList.remove('block-4__container-img2');
          block4Img.classList.remove('block-4__container-img3');
          block4Img.classList.remove('block-4__container-img4');
          block4Img.classList.remove('block-4__container-img1');

          block4Cont.innerHTML = '<p><b>Silicea</b>  – дененің қарсылығын нығайтуға және жергілікті иммунитетті жақсартуға көмектеседі. Ол сауығуды тездетеді,көмекей бездерін қалпына келтіреді және қайталанатын аурулардың алдын алады³</p>';

          counter5.classList.remove('hidden');
          counter2.classList.add('hidden');
          counter3.classList.add('hidden');
          counter4.classList.add('hidden');
          counter1.classList.add('hidden');

      };

      leftArrow5.onclick = function () {
          btn4.classList.add('block-4__btn-active');
          btn2.classList.remove('block-4__btn-active');
          btn3.classList.remove('block-4__btn-active');
          btn1.classList.remove('block-4__btn-active');
          btn5.classList.remove('block-4__btn-active');
          block4Img.classList.add('block-4__container-img4');
          block4Img.classList.remove('block-4__container-img2');
          block4Img.classList.remove('block-4__container-img3');
          block4Img.classList.remove('block-4__container-img1');
          block4Img.classList.remove('block-4__container-img5');

          block4Cont.innerHTML = '<p><b>Mercurius bijodatus</b>  – лимфа түйіндерінің ісінуі мен қабынуын жеңілдетеді, лимфа дренажын жақсартады, лакундардыі тазартуға, көмекей бездерінің үлкеймеуіне көмектеседі³</p>';

          counter4.classList.remove('hidden');
          counter2.classList.add('hidden');
          counter3.classList.add('hidden');
          counter1.classList.add('hidden');
          counter5.classList.add('hidden');
      };





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
