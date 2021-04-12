!(function() {
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




    !(function() {
      for (
        var e = document.querySelectorAll('.translateBtn'),
          s = document.querySelectorAll('.translated-text'),
          a = 0;
        a < e.length;
        a++
      )
        e[a].addEventListener('click', function() {
          for (var a = 0; a < e.length; a++) e[a].classList.remove('active');
          this.classList.add('active');
          for (
            var i = this.getAttribute('language'), l = 0;
            l < s.length;
            l++
          ) {
            var o = s[l].getAttribute('key'),
              p = t[i][o];
            s[l].innerHTML = p;
          }
        });
    })();
    var t = {
      ru: {
        'product-description': 'UK',
        leader: 'ОДНО РЕШЕНИЕ',
        acting: 'Действие',
        reception: 'Способ применения',
        buy: 'Где купить',
        language: 'ua',
        instruction: 'инструкция',
        'header-subtext-one':
          'Пробиотик для взрослых и детей с первых дней жизни',
        'header-subtext-two':
          'Не содержит аллергенных веществ: глютена, белка коровьего молока, молока, лактозы, сахарозы.',
        'symptoms-text': 'Когда принимать Актив Флора беби',
        'symptom-one': 'При диареи различного генеза<sup>1</sup>',
        'symptom-two': 'Во время и после приема антибиотиков<sup>1</sup>',
        'symptom-three': 'При аллергическом дерматите<sup>1</sup>',
        'symptom-four': 'Кишечные колики<sup>1</sup>',
        'symptom-five': 'Боль в животе<sup>1</sup>',
        'symptom-six': 'Простудные заболевания<sup>1</sup>',
        'application-text':
          'СИТУАЦИИ РАЗНЫЕ - РЕШЕНИЕ ОДНО<br><span>АКТИВ ФЛОРА <small>бебі</small></span>',
        'application-text-one':
          '<h4>№1 НАЙБІЛЬШ ВИВЧЕНА БАКТЕРІЯ LACTOBACILLUS RHAMNOSUS GG<sup>1</sup></h4>',
        'application-text-two':
          '<h4>ДО ЗАСТОСУВАННЯ З 1-го ДНЯ ЖИТТЯ</h4>',
        'application-text-three':
          '<h4>РІВЕНЬ ДОКАЗОВОСТІ «1» В ПРОФІЛАКТИЦІ АНТИБІОТИКО-АСОЦІЙОВАНОЇ ДІАРЕЇ ТА ЛІКУВАННІ ІНФЕКЦІЙНОЇ ДІАРЕЙ<sup>1</sup></h4>',
        'application-text-four':
          '<h4>ЗРУЧНЕ ЗАСТОСУВАННЯ 1 РАЗ В ДЕНЬ</h4>',
        'application-text-five':
          '<h4>Перший пробіотик з оливковою олією!<sup>2</sup></h4>',
        'application-text-six':
          '<h4>МІСТИТЬ 1 МІЛЬЯРД БАКТЕРІЙ LGG В 1-й КРАПЛІ</h4>',
          'application-text-seven':
          '<h4>1-й ПРОБІОТИК З ОЛИВКОЮ ОЛІЄЮ2, ЖИРНІ КИСЛОТИ ЯКОГО  НАЙБІЛЬШ СХОЖІ ДО ГРУДНОГО МОЛОКА<sup>3</sup></h4>',
        'acting-text': 'Первый пробиотик с оливковым маслом!',
        'reception-text': 'СПОСОБ ПРИМЕНЕНИЯ',
        'doses-text-one':
          'Младенцы и дети до 3 лет<br><span>1 капля в день во время еды</span>',
        'doses-text-two': 'Дети от 3 до 12 лет<br><span>6 капель в день</span>',
        'doses-text-three':
          'Дети в возрасте старше 12 лет и взрослые<br><span>12 капель в день</span>',
        'buy-text': 'ГДЕ КУПИТЬ',
        'disclamer-text-zero': 'Доказательная база',
        'disclamer-text-one':
          'WGO Global Guideline Probiotics and prebiotics, 2017',
        'disclamer-text-two': 'PharmXplorer 12.2020',
        'disclamer-text-last':
          "L'olio extravergine oliva e' simile al latte materno - Alimentazione - Salute e Benessere - ANSA.it",
        'disclamer-text':
          'На правах рекламы. Диетическая добавка «Актив Флора бэби» 5 мл. Не является лекарственным средством. Перед применением диетической добавки необходимо ознакомиться с инструкцией по применению и проконсультироваться с врачом. Хранить в недоступном для детей месте.',
        'disclamer-text2':
          'Вывод СЕЕ № 3/28-А-3414-20-69296 Е от 25.11.2020 г..',
        'disclamer-text3':
          'Если Вы хотите сообщить о возникновении побочной реакции и / или есть вопросы по медицинской информации и / или жалобы на качество диетической добавки «Актив Флора бэби», пожалуйста, присылайте письмо на электронный адрес: pharmacovigilance-ua@alpenpharma.com »',
        'disclamer-text4':
          'Эксклюзивный дистрибьютор: ЗАО «Натурфарм», ул. Лесная, 30а, г.. Киев, Пуща-Водица, 04075; телефон: (044) 401-81-03.',
        'disclamer-text5': 'Производитель: Komarko Sp. z o. o. (Польша).',
        'disclamer-text6': 'Поставщик: Альпен Фарма АГ (Швейцария).',
      },
      ua: {
        'product-description': 'RU',
        leader: 'Одне рішення',
        acting: 'як діє',
        reception: 'спосiб застосування',
        buy: 'де придбати',
        language: 'ru',
        instruction: 'Iнструкцiя',
        'header-subtext-one':
          'Пробiотик для дорослих та дiтей з перших днiв життя',
        'header-subtext-two':
          'Не містить алергенних речовин: глютену, білку коров’ячого молока, молока, лактози, сахарози.',
        'symptoms-text': 'Коли приймати Актив Флора бебi',
        'symptom-one': 'При дiареї рiзного характеру<sup>1</sup>',
        'symptom-two': 'Пiд час та пiсля прийому антибiотикiв<sup>1</sup>',
        'symptom-three': 'При алергiчному дерматитi<sup>1</sup>',
        'symptom-four': 'Кишковi колiки<sup>1</sup>',
        'symptom-five': 'Біль у животі<sup>1</sup>',
        'symptom-six': 'Простудні захворювання<sup>1</sup>',
        'application-text':
          'СИТУАЦІЇ РІЗНІ – РІШЕННЯ ОДНЕ<br><span>АКТИВ ФЛОРА <small>бебі</small></span>',
        'application-text-one':
          '<h4>До застосування з першого дня життя!<sup>1</sup></h4><br><small>Призначена для новонароджених, немовлят, дітей та дорослих.<br>Може також використовуватися у недоношених дітей і новонароджених з низькою вагою при народженні.</small>',
        'application-text-two':
          '<h4>Перший рівень доказовості!<sup>1</sup></h4><br><small>Лактобактерія LGG має найвищий рівень доказової бази при діареї у дітей та дорослих.</small>',
        'application-text-three':
          '<h4>Кратність прийому – 1 раз на добу під час їжі!<br></h4><b>Зручний спосіб застосування.</b></small>',
        'application-text-four':
          '<h4>Мільярд (1х10<sup>9</sup>) бактерій LGG в одній краплі!</h4><br><small>Перший європейський пробіотик з найвищим вмістом діючої речовини (бактерії LGG) в одній краплі.<b><sup>2</sup></b></small>',
        'application-text-five':
          '<h4>Пробіотик з оливковою олією!<sup>2</sup></h4><br><small>Жирні кислоти оливкової олiї найбільш споріднені з жирними кислотами грудного молока.<sup>3</sup></small>',
        'application-text-six':
          '<h4>Найбільш вивчена бактерія!<sup>1</sup></h4><br><small>Lactobacillus rhamnosus (LGG) є найбільш вивченим у світі штамом пробіотичних мікроорганізмів.</small>',
        'acting-text':
          'АКТИВ ФЛОРА БЕБІ ПІДТРИМУЄ НОРМАЛЬНИЙ БАЛАНС КИШКОВОЇ МІКРОФЛОРИ',
        'reception-text': 'Спосiб застосування',
        'doses-text-one':
          'Немовлята та дiти вiком до 3 рокiв<br><span>1 крапля на день пiд час прийому їжi</span>',
        'doses-text-two':
          'Дiти вiд 3 до 12 рокiв<br><span>6 крапель на день</span>',
        'doses-text-three':
          'Дiти вiком вiд 12 рокiв та дорослi<br><span>12 крапель на день</span>',
        'buy-text': 'Де придбати',
        'disclamer-text-zero': 'Доказова база',
        'disclamer-text-one':
          'WGO Global Guideline Probiotics and prebiotics, 2017',
        'disclamer-text-two': 'PharmXplorer 12.2020',
        'disclamer-text-last':
          "L'olio extravergine oliva e' simile al latte materno - Alimentazione - Salute e Benessere - ANSA.it",
        'disclamer-text':
          'На правах реклами. Дієтична добавка «Актив Флора бебі» 5 мл. Не є лікарським засобом. Перед застосуванням дієтичної добавки необхідно ознайомитись з інструкцією для застосування та проконсультуватися з лікарем. Зберігати у недоступному для дітей місці.',
        'disclamer-text2':
          'Висновок СЕЕ № 3/28-А-3414-20-69296 Е від 25.11.2020 р.',
        'disclamer-text3':
          'Якщо Ви хочете повідомити про виникнення побічної реакції і/або маєте запитання стосовно медичної інформації і/або скарги на якість дієтичної добавки «Актив Флора бебі», будь ласка, надсилайте лист на електронну адресу: pharmacovigilance-ua@alpenpharma.com»',
        'disclamer-text4':
          "Ексклюзивний дистриб'ютор: ПрАТ «Натурфарм», вул. Лісна, 30а, м. Київ, Пуща-Водиця, 04075; телефон: (044) 401-81-03.",
        'disclamer-text5': 'Виробник: Komarko Sp. z o. o. (Польща).',
        'disclamer-text6': 'Постачальник:  Альпен Фарма АГ (Швейцарія).',
      },
    };
  };
})();
