(function() {
  window.onload = function() {








    var acc1 = document.getElementsByClassName("accordion1");
    const uAcc = document.querySelector(".usless-head-accordeon1");
    var i;



    for (i = 0; i < acc1.length; i++) {
      acc1[i].addEventListener("click", function() {
        uAcc.classList.toggle("hidden");
        this.classList.toggle("active-acc");
        var panel = this.previousElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }


    var acc2 = document.getElementsByClassName("accordion2");
    const uAcc2 = document.querySelector(".usless-head-accordeon2");
    var j;



    for (j = 0; j < acc2.length; j++) {
      acc2[j].addEventListener("click", function() {
        uAcc2.classList.toggle("hidden");
        this.classList.toggle("active-acc");
        var panel = this.previousElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    var acc3 = document.getElementsByClassName("accordion3");
    const uAcc3 = document.querySelector(".usless-head-accordeon3");
    var k;



    for (k = 0; k < acc3.length; k++) {
      acc3[k].addEventListener("click", function() {
        uAcc3.classList.toggle("hidden");
        this.classList.toggle("active-acc");
        var panel = this.previousElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }




    (function() {

        const toggleBtns = document.querySelectorAll('.toggle-btn');

        for (var i = 0; i < toggleBtns.length; i++) {
          toggleBtns[i].addEventListener("click", function () {
            for (var k = 0; k < toggleBtns.length; k++) {
              toggleBtns[k].classList.remove('active-btn');
            }
            this.classList.add('active-btn');
          })
        }

    })();


    const dropsText = document.querySelectorAll('.drops-text');
    const siropText = document.querySelectorAll('.sirop-text');
    const siropBtn = document.querySelector('.sirop-btn');
    const dropsBtn = document.querySelector('.drops-btn');

    siropBtn.addEventListener("click", function () {
      for (var k = 0; k < dropsText.length; k++) {
        dropsText[k].classList.add('active-drops');
      }
      for (var j = 0; j < siropText.length; j++) {
        siropText[j].classList.add('hidden');
      }
    });
    dropsBtn.addEventListener("click", function () {
      for (var k = 0; k < dropsText.length; k++) {
        dropsText[k].classList.remove('active-drops');
      }
      for (var j = 0; j < siropText.length; j++) {
        siropText[j].classList.remove('hidden');
      }
    });




    (function() {
      const inpt = document.querySelector(".this-inpt");
      const menu1 = document.querySelector(".menuLi1");
      const menu2 = document.querySelector(".menuLi2");
      const menu3 = document.querySelector(".menuLi3");
      const menu4 = document.querySelector(".menuLi4");
      const menu5 = document.querySelector(".menuLi5");

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
      menu5.onclick = function() {
        inpt.click();
      };

    })


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

      // (function(){

      //   const menuLi = document.querySelectorAll('.menuLi');
      //   const menu = document.querySelector('#menu');

      //   for (var i = 0; i < menuLi.length; i++) {
      //   menuLi[i].addEventListener("click", function(){
      //       menu.classList.add('active-li');
      //       // this.classList.add('active-li');
      //   })
      // }
      // })


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
