!function(){window.onload=function(){function e(){s.classList.add("visible"),l.classList.add("blocked")}function t(){s.classList.remove("visible"),l.classList.remove("blocked")}function c(){i.classList.add("visible"),l.classList.add("blocked")}function o(){i.classList.remove("visible"),l.classList.remove("blocked")}const n=document.querySelector(".preroll");setTimeout(function(){n.classList.add("preroll-active")},500);const s=document.querySelector(".popup"),i=document.querySelector(".popup2"),a=document.querySelectorAll("[data-action]");a.forEach(function(c){switch(c.dataset.action){case"open1":c.onclick=e;break;case"close1":c.onclick=t}}),a.forEach(function(e){switch(e.dataset.action){case"open2":e.onclick=c;break;case"close2":e.onclick=o}});var l=document.querySelector("body");!function(){var e=document.querySelectorAll(".translateBtn");console.log("here");for(var t=document.querySelectorAll(".translated-text"),c=0;c<e.length;c++)e[c].addEventListener("click",function(){for(var c=0;c<e.length;c++)e[c].classList.remove("active");this.classList.add("active");for(var o=this.getAttribute("language"),n=0;n<t.length;n++){var s=t[n].getAttribute("key"),i=r[o][s];t[n].innerHTML=i}})}();var r={ru:{instruction:"Инструкция",n1:"Где купить",n2:"Особенности",n3:"Добавь жизни красок","buy-text":"ГДЕ КУПИТЬ"},ua:{instruction:"Iнструкцiя",n1:"Де купити",n2:"Особливості",n3:"Додай життю фарб!","buy-text":"ДЕ КУПИТИ"}}}}();