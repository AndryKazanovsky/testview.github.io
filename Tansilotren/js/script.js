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

      const counterNum = document.querySelector('.counter-num');

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

          block4Cont.innerHTML = '<p><b>Atropinum sulfuricum</b> –  оказывает противовоспалительное действие при остром течении, снимает боль в горле при глотании, устраняет гиперемию и отек миндалин, уменьшает лихорадку³</p>';
          counterNum.innerHTML = '<p>2 / 5</p>';
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

          block4Cont.innerHTML = '<p><b>Hepar sulfuris</b>  –  Hepar sulfuris – оказывает противовоспалительное действие при хроническом течении. Способствует очищению лакун от патологического содержимого, заживлению нарывов.³</p>';
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

          block4Cont.innerHTML = '<p><b>Kalium bichromicum</b>  –  Снимает отек и воспаление носоглотки, устраняет ощущение жжения и раздражение. Способствует уменьшению гипертрофии миндалин³</p>';
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

          block4Cont.innerHTML = '<p><b>Mercurius bijodatus</b>  –  Mercurius bijodatus – Снимает отек и воспаление лимфатических узлов, улучшает лимфодренаж, способствует очищению лакун, уменьшению гипертрофии миндалин.³</p>';
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

          block4Cont.innerHTML = '<p><b>Silicea</b>  –  Silicea – Способствует укреплению сопротивляемости организма и улучшению местного иммунитета. Ускоряет выздоровление, восстанавливает миндалины и предупреждает повторные заболевания.³</p>';
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
