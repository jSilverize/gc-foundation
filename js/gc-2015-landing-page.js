$(document).ready(function () {

  var telaLargura = window.innerWidth;
  var telaAltura = window.innerHeight;

  $(window).resize(function () {
    telaLargura = window.innerWidth;
    telaAltura = window.innerHeight;
    landingMenuAdjust();
    capaFullscreen();
  });

  function capaFullscreen() {
    var alturaCapa = telaAltura - ($("#menuFlutuante").innerHeight() + 1) - ($("#navbar-lp-container").innerHeight());
    $(".capa-fullscreen").css("height", alturaCapa);
  }
  capaFullscreen();

  function gerarOpcoesMenuPelasSections() {
    var i;
    var menuContainer = $("#menuLandingPageCollapsed .navbar-nav")[0];
    var menu = [];
    var opcao = {};
    var sections = $("section");
    for (i = 0; i < sections.size(); i++) {
      var secao = sections[i];
      try {
        opcao.target = "#" + secao.getAttribute("id");
        opcao.text = secao.getAttribute("data-menu-text");
        opcao.title = secao.getAttribute("data-menu-title");
        menu.push(opcao);
        if (opcao.target && opcao.text) {
          console.log("Gerando opção no Landing Menu: " + opcao.text);
          var li = document.createElement("li");
          var ancor = document.createElement("a");
          ancor.setAttribute("class", "go-to-by-scroll");
          ancor.setAttribute("href", opcao.target);
          ancor.setAttribute("title", opcao.title);
          ancor.textContent = "" + opcao.text;
          li.appendChild(ancor);
          menuContainer.appendChild(li);
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
  gerarOpcoesMenuPelasSections();

  $("#menuFlutuante").toggleClass("navbar-fixed-top navbar-static-top");
  $("#menuLandingPage").affix({
    offset: {
      top: $("header").height() + 165
    }
  });

  landingMenuAdjust();

  function landingMenuAdjust() {

    if (telaLargura > 767) {

      var larguraContainer = $("#menuLandingPage .container").innerWidth();
      var larguraNavHeader = $("#menuLandingPage .navbar-header").innerWidth();
      var larguraNav = larguraContainer - (larguraNavHeader + 31);
      $("#menuLandingPage .navbar-nav").css("width", larguraNav + "px");

      var numOpcoesMenu = $("#menuLandingPage .navbar-nav li").size();
      var larguraOpcoesMenu = 100 / numOpcoesMenu;
      $("#menuLandingPage .navbar-nav li").css("width", larguraOpcoesMenu + "%");

      $(window).scroll(function () {
        if ($(this).scrollTop() > $("header").height() + 150) {
          $("#menuLandingPage .navbar-brand").removeClass("invisible");
        } else {
          $("#menuLandingPage .navbar-brand").addClass("invisible");
        }
      });

      $("#menuLandingPage .navbar-nav li a").tooltip({
        container: 'body',
        placement: 'bottom'
      });

      $("#menuLandingPage .navbar-brand").tooltip({
        container: 'body',
        placement: 'bottom'
      });

    } else {
      $("#menuLandingPage .navbar-nav").removeAttr("style");
      $("#menuLandingPage .navbar-nav li").removeAttr("style");

      $("#menuLandingPage .navbar-brand").removeClass("invisible");
    }

  }

  // para rolar entre secoes
  $("#menuLandingPage .navbar-nav li a").click(function (e) {
    e.preventDefault();
    goToByScroll($(this).attr("href"));
    if (telaLargura < 768) {
      $("#menuLandingPage .navbar-toggle").click();
    }
  });
  $(".go-to-by-scroll").click(function (e) {
    e.preventDefault();
    goToByScroll($(this).attr("href"));
  });
  $(".navbar-brand").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  function goToByScroll(section) {
    console.log("Rolando para " + section);
    $('html, body').animate({scrollTop: $(section).offset().top - 50}, 500);
  }
  // para rolar entre secoes

});