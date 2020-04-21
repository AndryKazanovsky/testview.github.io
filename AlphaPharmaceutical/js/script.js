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
              messanger: document.querySelector('#messanger').value,
              message: document.querySelector('#message').value
          }

          /*transmit data*/
          let request = new XMLHttpRequest();

          request.open('POST', "send.php")
          request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
          request.send('name=' + encodeURIComponent(formData.name) + '&messangerContact=' + encodeURIComponent(formData.messangerContact) + '&messanger=' +  encodeURIComponent(formData.messanger) + '&message=' +    encodeURIComponent(formData.message))
      })


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
              '<h3>Исследование конъюнктуры фармацевтического рынка стран\n' +
              'Европейского союза</h3> <ul>\n' +
              '                    <li>Оценка привлекательности рынка</li>\n' +
              '                    <li>Прогностическое моделирование трендов отрасли и продаж </li>\n' +
              '                    <li>Анализ основных игроков рынка</li>\n' +
              '                    <li>Аудит рыночных перспектив компании</li>\n' +
              '                    <li>Консалтинг компании относительно интеграции ее в определенный сегмент</li>\n' +
              '                    <li>Диверсификация продуктового портфеля компании</li>\n' +
              '                    <li>Стратегический анализ рациональности инвестиций</li>\n' +
              '                    <li>Анализ экспортно-импортных возможностей компании</li>\n' +
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
              '<h3>Бизнес сопровождение 360°</h3> <ul>\n' +
              '                    <li>Проведение коммерческих переговоров с производителями от имени клиента</li>\n' +
              '                    <li>Поиск и подписание контрактов с производителями</li>\n' +
              '                    <li>Подбор партнеров для дистрибуции продукта на рынке</li>\n' +
              '                    <li>Поиск фармацевтических препаратов для дальнейшего продвижения на рынках</li>\n' +
              '                    <li>Выявление потенциальных целей для инвестирования или приобретения</li>\n' +
              '                    <li>Поиск и переговоры с производителями, которые готовы лицензировать свои фармацевтические препараты, продавать активные фармацевтические ингредиенты и медикаменты в форме in bulk</li>\n' +
              '                    <li>Риск менеджмент</li>\n' +
              '                    <li>Подготовка необходимой документации для совершения сделки</li>\n' +
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
              '<h3>Регистрация фармацевтических продуктов</h3>' +
              '<p>Полное ведение регистрационного процесса лекарственных препаратов, изделий\n' +
              'медицинского назначения и биологически активных добавок</p>' +
              ' <ul>\n' +
              '                    <li>Изучение представленной документации, подготовка документов для фармцентра\n' +
              ' Консультации со специалистами</li>\n' +
              '                    <li>Фармэкспертиза</li>\n' +
              '                    <li>Получение регистрационного удостоверения</li>\n' +
              '                    <li> Предоставление готовой регистрации от производителя</li>\n' +
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
              '<h3>Продажа лекарственных средств, АФИ</h3> <ul>\n' +
              '                    <li>Инвестиционный анализ привлекательности продукта</li>\n' +
              '                    <li>Разработка лонч-плана</li>\n' +
              '                    <li>Анализ конкурентов в целевом рынке</li>\n' +
              '                    <li>Разработка ценового позиционирования</li>\n' +
              '                    <li>Изучение прескрайберов и потребителей</li>\n' +
              '                    <li>Аудит каналов пенетрации</li>\n' +
              '                    <li>Подбор оптимальных инструментов для эффективного продвижения препаратов,\n' +
              'биологически активных добавок или изделий медицинского назначения</li>\n' +
              '                    <li>Лонч и пост-лонч анализ продаж продукта</li>\n' +
              '                    <li>Срез тренда продаж и корректировка дальнейшего внедрения на рынок</li>\n' +
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
