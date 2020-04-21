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


      /////// send form
      let button = document.querySelector('button');

      /*add event on the send button*/
      button.addEventListener('click', function(event) {
          event.preventDefault();
          /*create object*/
          let formData = {
              name: document.querySelector('#name').value,
              messangerContact: document.querySelector('#messanger-contact').value,
              message: document.querySelector('#message').value
          }

          /*transmit data*/
          let request = new XMLHttpRequest();

          request.open('POST', "send.php");
          request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
          request.send('name=' + encodeURIComponent(formData.name) + '&messangerContact=' + encodeURIComponent(formData.messangerContact) + '&message=' +  encodeURIComponent(formData.message))
      })


      console.log('form test');

// var controller = new ScrollMagic.Controller();
//
//
//
//     var scene = new ScrollMagic.Scene({
//       triggerElement: '.block-2__text',
//     }).setClassToggle('.block-3__product', 'show1').addTo(controller);
//     var scene2 = new ScrollMagic.Scene({
//       triggerElement: '.block-2__text',
//     }).setClassToggle('.block-3__left-block', 'slide1').addTo(controller);
//     var scene3 = new ScrollMagic.Scene({
//       triggerElement: '.block-2__text',
//     }).setClassToggle('.block-3__right-block', 'slide2').addTo(controller);

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


      // buttons

      const btn1 = document.querySelector('.keybtn1');
      const btn2 = document.querySelector('.keybtn2');
      const btn3 = document.querySelector('.keybtn3');
      const btn4 = document.querySelector('.keybtn4');

      // const block4Img = document.querySelector('.block-4__container-img');
      const block4Cont = document.querySelector('.block-1-text');

      btn1.onclick = function() {
          btn1.classList.add('keybtn1-active');
          btn2.classList.remove('keybtn2-active');
          btn3.classList.remove('keybtn3-active');
          btn4.classList.remove('keybtn4-active');
          // block4Img.classList.add('block-4__container-img1');
          // block4Img.classList.remove('block-4__container-img3');
          // block4Img.classList.remove('block-4__container-img2');

          block4Cont.innerHTML =
              '<h3>Badanie koniunktury rynku farmaceutycznego w państwach Unii Europejskiej\n' +
              '</h3> <ul>\n' +
              '                    <li>Ocena atrakcyjności rynku</li>\n' +
              '                    <li>Predykcyjne modelowanie trendów branż i sprzedaży  </li>\n' +
              '                    <li>Analiza głównych graczy rynkowych</li>\n' +
              '                    <li>Audyt perspektyw firmy na rynku</li>\n' +
              '                    <li>Konsulting firmy odnośnie jej integracji w określony segment</li>\n' +
              '                    <li>Dywersyfikacja produktowego portfolio firmy</li>\n' +
              '                    <li>Analiza strategiczna racjonalności inwestycji</li>\n' +
              '                    <li>Analiza możliwości eksportowo-importowych firmy</li>\n' +
              '                </ul>';
      };
      btn2.onclick = function() {
          btn2.classList.add('keybtn2-active');
          btn1.classList.remove('keybtn1-active');
          btn3.classList.remove('keybtn3-active');
          btn4.classList.remove('keybtn4-active');
          // block4Img.classList.add('block-4__container-img3');
          // block4Img.classList.remove('block-4__container-img2');
          // block4Img.classList.remove('block-4__container-img1');

          block4Cont.innerHTML =
              '<h3>Asysta biznesowa  360 ° </h3> <ul>\n' +
              '                    <li>Przeprowadzenie negocjacji handlowych z producentami w imieniu klienta</li>\n' +
              '                    <li>Pozyskanie i podpisanie umów z producentami</li>\n' +
              '                    <li>Selekcja partnerów do dystrybucji produktu na rynku</li>\n' +
              '                    <li>Poszukiwanie produktów farmaceutycznych do dalszej promocji na rynku</li>\n' +
              '                    <li>Identyfikacja potencjalnych celów inwestycji czy zakupów</li>\n' +
              '                    <li>Poszukiwanie i negocjacje z producentami, którzy są gotowi licencjonować swoje preparaty farmaceutyczne, sprzedawać aktywne składniki farmaceutyczne i leki luzem</li>\n' +
              '                    <li>Zarządzanie ryzykiem</li>\n' +
              '                    <li>Przygotowanie dokumentacji niezbędnej do zawarcia porozumienia</li>\n' +
              '                </ul>';
      };
      btn3.onclick = function() {
          btn3.classList.add('keybtn3-active');
          btn2.classList.remove('keybtn2-active');
          btn1.classList.remove('keybtn1-active');
          btn4.classList.remove('keybtn4-active');
          // block4Img.classList.add('block-4__container-img2');
          // block4Img.classList.remove('block-4__container-img1');
          // block4Img.classList.remove('block-4__container-img3');

          block4Cont.innerHTML =
              '<h3>Rejestracja produktów farmaceutycznych</h3>' +
              '<p>Zupełne prowadzenie procesu rejestracji preparatów lekarskich, wyrobów medycznych i suplementów</p>' +
              ' <ul>\n' +
              '                    <li>Zupełne prowadzenie procesu rejestracji preparatów lekarskich, wyrobów medycznych i suplementów</li>\n' +
              '                    <li>Konsultacje ze specjalistami</li>\n' +
              '                    <li>Ekspertyza farmaceutyczna</li>\n' +
              '                    <li>Uzyskanie dowodu rejestracyjnego</li>\n' +
              '                    <li> Pozyskanie gotowej rejestracji od producenta</li>\n' +
              '                </ul>';
      };
      btn4.onclick = function() {
          btn4.classList.add('keybtn4-active');
          btn2.classList.remove('keybtn2-active');
          btn1.classList.remove('keybtn1-active');
          btn3.classList.remove('keybtn3-active');
          // block4Img.classList.add('block-4__container-img2');
          // block4Img.classList.remove('block-4__container-img1');
          // block4Img.classList.remove('block-4__container-img3');

          block4Cont.innerHTML =
              '<h3>Sprzedaż środków leczniczych, API</h3> <ul>\n' +
              '                    <li>Inwestycyjna analiza atrakcyjności produktu</li>\n' +
              '                    <li>Opracowanie launch planu</li>\n' +
              '                    <li>Analiza konkurentów na rynku docelowym</li>\n' +
              '                    <li>Opracowanie cenowego pozycjonowania</li>\n' +
              '                    <li>Analiza lekarzy przepisujących leki oraz konsumentów</li>\n' +
              '                    <li>Audyt kanałów penetracji</li>\n' +
              '                    <li>Wybór optymalnych narzędzi do skutecznej promocji leków, suplementów bądź wyrobów medycznych </li>\n' +
              '                    <li>Launch i post launch analiza sprzedaży produktu </li>\n' +
              '                    <li>Określenie trendów sprzedaży i korekta dalszego wprowadzania na rynek</li>\n' +
              '                </ul>';
      };




    // endscroll


    // var pBtn1 = document.querySelector(".p-btn1");
    // var pBtn2 = document.querySelector(".p-btn2");
    //
    // var block51 = document.querySelector(".block-5-1");
    // var block52 = document.querySelector(".block-5-2");
    //
    // pBtn1.onclick = function() {
    //   block51.classList.add("block-5-active");
    //   block51.classList.remove("block-5-disable");
    //   block52.classList.add("block-5-disable");
    //     block52.classList.remove("block-5-active");
    //
    //     pBtn1.classList.add("active-btn");
    //     pBtn2.classList.remove("active-btn2");
    //
    // };
    // pBtn2.onclick = function() {
    //   block51.classList.add("block-5-disable");
    //   block51.classList.remove("block-5-active");
    //     block52.classList.add("block-5-active");
    //     block52.classList.remove("block-5-disable");
    //
    //     pBtn2.classList.add("active-btn2");
    //     pBtn1.classList.remove("active-btn");
    // };

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
