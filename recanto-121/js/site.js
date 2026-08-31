/*
 * Interações do site. Tudo opcional — a página funciona sem JS.
 * Sem dependência.
 */
(function () {
  "use strict";

  /* menu mobile */
  var btn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var aberto = menu.classList.toggle("aberto");
      btn.setAttribute("aria-expanded", String(aberto));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("aberto");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* setas da galeria */
  var galeria = document.querySelector(".galeria");
  if (galeria) {
    var trilha = galeria.querySelector(".galeria-trilha");
    var passo = function () {
      var item = trilha.querySelector("li");
      return item ? item.getBoundingClientRect().width + 12 : 320;
    };
    galeria.querySelector(".prev").addEventListener("click", function () {
      trilha.scrollBy({ left: -passo(), behavior: "smooth" });
    });
    galeria.querySelector(".next").addEventListener("click", function () {
      trilha.scrollBy({ left: passo(), behavior: "smooth" });
    });
  }

  /* ano do rodapé */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
