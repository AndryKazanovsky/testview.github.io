(function() {
  window.onload = function() {

    const carouselImg = document.querySelector(".fourth-container__carousel");
    const chosenIngredient = document.querySelector(".chosen-ingredient");
    const chosenIngredientContent = document.querySelector(".chosen-ingredient-content");
    const ingredient1 = document.querySelectorAll(".ingredient1");
    const ingredient2 = document.querySelectorAll(".ingredient2");
    const ingredient3 = document.querySelectorAll(".ingredient3");
    const ingredient4 = document.querySelectorAll(".ingredient4");

    const ingredientDot1 = document.querySelector(".ingredient-dot1");
    const ingredientDot2 = document.querySelector(".ingredient-dot2");
    const ingredientDot3 = document.querySelector(".ingredient-dot3");
    const ingredientDot4 = document.querySelector(".ingredient-dot4");


    const ingredientImg1 = document.querySelector(".ingredient-img1");
    const ingredientImg2 = document.querySelector(".ingredient-img2");
    const ingredientImg3 = document.querySelector(".ingredient-img3");
    const ingredientImg4 = document.querySelector(".ingredient-img4");

    for (var i = 0; i < ingredient1.length; i++) {
        ingredient1[i].onclick = function(){
        ingredientImg1.classList.remove('zoom');
        ingredientImg1.classList.add('zoom-out');
        ingredientImg2.classList.remove('zoom');
        ingredientImg2.classList.add('zoom-out');
        ingredientImg3.classList.remove('zoom');
        ingredientImg3.classList.add('zoom-out');
        ingredientImg4.classList.add('zoom');
        ingredientImg4.classList.remove('zoom-out');
        carouselImg.style.backgroundImage = "url('./images/sangvinaria_big.png')";
        ingredientDot1.style.backgroundImage = "url('./images/radio-active.png')";
        ingredientDot2.style.backgroundImage = "url('./images/radio-disabled.png')";
        ingredientDot3.style.backgroundImage = "url('./images/radio-disabled.png')";
        ingredientDot4.style.backgroundImage = "url('./images/radio-disabled.png')";
        chosenIngredient.innerHTML = "Сангвинария";
        chosenIngredientContent.innerHTML = "Эффективна при приливах жара, учащённом сердцебиении, изменении сосудистого тонуса";
      };
    }
    for (var i = 0; i < ingredient2.length; i++) {
      ingredient2[i].onclick = function(){
        ingredientImg1.classList.remove('zoom');
        ingredientImg1.classList.add('zoom-out');
        ingredientImg2.classList.remove('zoom');
        ingredientImg2.classList.add('zoom-out');
        ingredientImg3.classList.add('zoom');
        ingredientImg3.classList.remove('zoom-out');
        ingredientImg4.classList.remove('zoom');
        ingredientImg4.classList.add('zoom-out');
        carouselImg.style.backgroundImage = "url('./images/ignaciya_big.png')";
        ingredientDot1.style.backgroundImage = "url('./images/radio-disabled.png')";
        ingredientDot2.style.backgroundImage = "url('./images/radio-active.png')";
        ingredientDot3.style.backgroundImage = "url('./images/radio-disabled.png')";
        ingredientDot4.style.backgroundImage = "url('./images/radio-disabled.png')";
        chosenIngredient.innerHTML = "Игнация";
        chosenIngredientContent.innerHTML = "Влияет на эмоциональное состояние женщины: устраняет раздражительность, улучшает сон.";
      };
    }
    for (var i = 0; i < ingredient3.length; i++) {
      ingredient3[i].onclick = function(){
        ingredientImg1.classList.remove('zoom');
        ingredientImg1.classList.add('zoom-out');
        ingredientImg2.classList.add('zoom');
        ingredientImg2.classList.remove('zoom-out');
        ingredientImg3.classList.remove('zoom');
        ingredientImg3.classList.add('zoom-out');
        ingredientImg4.classList.remove('zoom');
        ingredientImg4.classList.add('zoom-out');
        carouselImg.style.backgroundImage = "url('./images/cymyfuga_big.png')";
        ingredientDot1.style.backgroundImage = "url('./images/radio-disabled.png')";
        ingredientDot2.style.backgroundImage = "url('./images/radio-disabled.png')";
        ingredientDot3.style.backgroundImage = "url('./images/radio-active.png')";
        ingredientDot4.style.backgroundImage = "url('./images/radio-disabled.png')";
        chosenIngredient.innerHTML = "Цимицифуга";
        chosenIngredientContent.innerHTML = "Эффективно устраняет  приливы жара, нормализует психоэмоциональный фон.";
      };
    }
    for (var i = 0; i < ingredient4.length; i++) {
      ingredient4[i].onclick = function(){
        ingredientImg1.classList.add('zoom');
        ingredientImg1.classList.remove('zoom-out');
        ingredientImg2.classList.remove('zoom');
        ingredientImg2.classList.add('zoom-out');
        ingredientImg3.classList.remove('zoom');
        ingredientImg3.classList.add('zoom-out');
        ingredientImg4.classList.remove('zoom');
        ingredientImg4.classList.add('zoom-out');
        carouselImg.style.backgroundImage = "url('./images/sepia_big_new.png')";
        ingredientDot1.style.backgroundImage = "url('./images/radio-disabled.png')";
        ingredientDot2.style.backgroundImage = "url('./images/radio-disabled.png')";
        ingredientDot3.style.backgroundImage = "url('./images/radio-disabled.png')";
        ingredientDot4.style.backgroundImage = "url('./images/radio-active.png')";
        chosenIngredient.innerHTML = "Сепия";
        chosenIngredientContent.innerHTML = "Помогает при мигрени и сильных головных болях, замедляет образование пигментных пятен, способствует повышению резервов адаптации организма и обладает антивозрастным эффектом.<sup>2</sup>";
      };
    }


    // accordion
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

    // scroll




    // endscroll




    (function() {

      const navmenu = document.querySelectorAll('.navmenu');

      for (var i = 0; i < navmenu.length; i++) {
        navmenu[i].addEventListener("click", function(){
          for (var k = 0; k < navmenu.length; k++) {
            navmenu[k].classList.remove('active');
          }
          this.classList.add('active');
        })
      }
    })();
    };
})();
