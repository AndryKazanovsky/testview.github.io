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
              '<h3>Pharmaceutical market research in the European Union countries</h3> <ul>\n' +
              '                    <li>Assessment of market attractiveness</li>\n' +
              '                    <li>Predictive modeling of industry and sales trends </li>\n' +
              '                    <li>Analysis of main market players</li>\n' +
              '                    <li>Audit of the company\'s perspectives on the market</li>\n' +
              '                    <li>Consulting the company regarding its integration in a specific segment</li>\n' +
              '                    <li>Diversification of the company\'s product portfolio</li>\n' +
              '                    <li>Strategic analysis of investments rationality</li>\n' +
              '                    <li>Analysis of the company\'s export and import possibilities</li>\n' +
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
              '<h3>Business assistance 360 °</h3> <ul>\n' +
              '                    <li>Conducting trade negotiations with producers on behalf of the client</li>\n' +
              '                    <li>Acquiring and signing contracts with producers</li>\n' +
              '                    <li>Selection of partners for product distribution on the market</li>\n' +
              '                    <li>Search of pharmaceutical products for further promotion on the markets</li>\n' +
              '                    <li>Identification of potential investment or purchase goals</li>\n' +
              '                    <li>Search and negotiations with producers, who are ready to license their pharmaceutical products, sell active pharmaceutical ingredients and medicines in bulk</li>\n' +
              '                    <li>Risk management</li>\n' +
              '                    <li>Preparation of documentation necessary to establish the agreement</li>\n' +
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
              '<h3>Registration of pharmaceutical products</h3>' +
              '<p>Comprehensive leading of the registration process of medical products, medical devices and supplements</p>' +
              ' <ul>\n' +
              '                    <li>Study of  the submitted documentation, preparation of documents for the center of pharmaceuticals</li>\n' +
              '                    <li>Consultations with specialists</li>\n' +
              '                    <li>Pharmaceutical expertise</li>\n' +
              '                    <li>Obtaining the registration evidence</li>\n' +
              '                    <li> Acquiring prepared registration from the producer</li>\n' +
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
              '<h3>Sales of medicinal products, API</h3> <ul>\n' +
              '                    <li>Investment analysis of product attractiveness</li>\n' +
              '                    <li>Establishing the launch plan</li>\n' +
              '                    <li>Analysis of competitors on the target market</li>\n' +
              '                    <li>Development of price positioning</li>\n' +
              '                    <li>Analysis of prescribers and consumers</li>\n' +
              '                    <li>Audit of penetration channels</li>\n' +
              '                    <li>Selection of optimal tools for effective promotion of medicines, supplements or medical devices</li>\n' +
              '                    <li>Launch and post launch analysis of product sales</li>\n' +
              '                    <li>Determining sales trends and correcting further market promotion</li>\n' +
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
