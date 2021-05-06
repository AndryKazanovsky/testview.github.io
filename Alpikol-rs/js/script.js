(function() {
  window.onload = function() {


    var acc = document.getElementsByClassName('accordion');
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function() {
        this.classList.toggle('active-acc');
        var panel = this.previousElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }

    const alertLicense = document.querySelector('.alert-license');
    const licenseOff = document.querySelector('.license-off');
      licenseOff.onclick = function() {
          alertLicense.classList.add('hide');
      };

    // buttons

    const btn1 = document.querySelector('.keybtn1');
    const btn2 = document.querySelector('.keybtn2');
    const btn3 = document.querySelector('.keybtn3');

    const block4Img = document.querySelector('.block-4__container-img');
    const block4Cont = document.querySelector('.block-4__container-content');

    btn1.onclick = function() {
      btn1.classList.add('block-4__btn-active');
      btn2.classList.remove('block-4__btn-active');
      btn3.classList.remove('block-4__btn-active');
      block4Img.classList.add('block-4__container-img1');
      block4Img.classList.remove('block-4__container-img3');
      block4Img.classList.remove('block-4__container-img2');

      block4Cont.innerHTML =
        '<h4>Ekstrakt ploda crne zove​<br><p><i>(Sambucus nigra)</i></p></h4>\n' +
        '<p>Zahvaljujući jakom antioksidativnom delovanju crna zova doprinosi jačanju imunog sistema.<sup>1,2,3,4</sup></p>' +
        '<p>Izvor je brojnih mikronutrijenata i biološki aktivnih materija dragocenih u očuvanju zdravlja.<sup>1</sup></p>' + 
        '<p>Ekstrakt je standardizovan na 10% polifenola.</p>';
    };
    btn2.onclick = function() {
      btn2.classList.add('block-4__btn-active');
      btn1.classList.remove('block-4__btn-active');
      btn3.classList.remove('block-4__btn-active');
      block4Img.classList.add('block-4__container-img3');
      block4Img.classList.remove('block-4__container-img2');
      block4Img.classList.remove('block-4__container-img1');

      block4Cont.innerHTML =
        '<h4>Ekstrakt korena južnoafričke muškatle​<br><p><i>(Pelargonium sidoides)</i></p></h4>\n' +
        '<p>\n' +
        'Južnoafrička muškatla ili afrički geranijum  doprinosi jačanju imunog sistema u borbi protiv virusa i pomaže izbacivanju sekreta iz disajnih puteva.<sup>5,6</sup>​' +
        '</p>'
    };
    btn3.onclick = function() {
      btn3.classList.add('block-4__btn-active');
      btn2.classList.remove('block-4__btn-active');
      btn1.classList.remove('block-4__btn-active');
      block4Img.classList.add('block-4__container-img2');
      block4Img.classList.remove('block-4__container-img1');
      block4Img.classList.remove('block-4__container-img3');

      block4Cont.innerHTML =
        '<h4>Yestimun<sup>®</sup> beta glukan​</h4>\n' +
        '<p>' +
        'Prirodni ekstrakt kvasca <i>Saccharomyces cerevisiae</i>, standardizovan na minimalno 85% 1.3/1.6 D-beta glukana.​' +
        '</p>' +
        '<p>' +
        'Aktivira i jača imuni sistem.<sup>7</sup> ' +
        '</p>' +
        '<p>' +
        'Smanjuje broj epizoda bolesti tokom jeseni i zime.<sup>8</sup> ' +
        '</p>' +
        '<p>' +
        'Blagotvorno deluje na celokupno zdravlje.<sup>9</sup> ' +
        '</p>';
    };

    // console.log(btn1);

    // var controller = new ScrollMagic.Controller();

    // var scene = new ScrollMagic.Scene({
    //   triggerElement: '.navigation-logo',
    // }).setClassToggle('.header-custom__herp', 'show2').addTo(controller);

    (function() {
      const inpt = document.querySelector('.this-inpt');
      const menu1 = document.querySelector('.menuLi1');
      const menu2 = document.querySelector('.menuLi2');
      const menu3 = document.querySelector('.menuLi3');
      const menu4 = document.querySelector('.menuLi4');

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
    })

    (function() {
      const navmenu = document.querySelectorAll('.navmenu');

      for (var i = 0; i < navmenu.length; i++) {
        navmenu[i].addEventListener('click', function() {
          for (var k = 0; k < navmenu.length; k++) {
            navmenu[k].classList.remove('active');
          }
          this.classList.add('active');
        });
      }
    })();
  };
})();
