$(document).ready(function () {

  $("ul.dropdown-menu [data-toggle=dropdown]").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).parent().siblings().removeClass("open");
    $(this).parent().toggleClass("open");
  });

  var width = window.innerWidth;

  $(".tab-places li a").click(function () {
    $(".tab-places .active").removeClass("active");
  });

  $(".badge").tooltip({
    container: 'body',
    placement: 'bottom'
  });

  function botoesTurma() {
    if (width < 468) {
      $(".btn-turma").removeClass("btn-sm");
      $(".btn-turma-duvida").removeClass("btn-sm");
    } else {
      $(".btn-turma").addClass("btn-sm");
      $(".btn-turma-duvida").addClass("btn-sm");
    }
  }
  botoesTurma();
  $(window).resize(botoesTurma);

  // botão para voltar ao topo da página
  var btnBackToTop = document.createElement("a");
  var setaCima = document.createElement("i");
  btnBackToTop.setAttribute("id", "back-to-top");
  btnBackToTop.setAttribute("title", "Rolar página para o topo");
  btnBackToTop.setAttribute("data-toggle", "tooltip");
  btnBackToTop.setAttribute("data-placement", "left");
  setaCima.setAttribute("class", "fa fa-fw fa-chevron-up");
  btnBackToTop.appendChild(setaCima);
  document.body.appendChild(btnBackToTop);

});

$(window).load(function () {

  // remover ao implementar no site principal
  $("#footerLoad").load("footer.html");
  // remover ao implementar no site principal

  // esconder botão de voltar ao topo
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  // rolar página para 0px ao topo
  $("#back-to-top").click(function () {
    $("#back-to-top").tooltip("hide");
    $("body,html").animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  $("#back-to-top").tooltip("show");

});

// AddThis Smart Layers API
function inicializarAddThis() {

  addthis.layers({
    'domain': 'www.globalcode.com.br',
    'linkFilter': function (link, layer) {
      console.log(link.title + ' - ' + link.url + " - " + layer);
      return link;
    },
    'share': {
      'theme': 'transparent',
      'position': 'right',
      'services': 'facebook,twitter,google_plusone_share,linkedin,email,compact',
      'postShareTitle': 'Obrigado por compartilhar!',
      'postShareFollowMsg': 'Siga a Globalcode nas redes sociais também :)',
      'offset': {
        'top': '30%'
      }
    },
    'follow': {
      'services': [
        {'service': 'facebook', 'id': 'Globalcode'},
        {'service': 'twitter', 'id': 'Globalcode'},
        {'service': 'google_follow', 'id': '+Globalcode'}
      ],
      'title': 'Siga-nos',
      'postFollowTitle': 'Obrigado por nos seguir!',
      'mobile': true,
      'desktop': true,
      'offset': {
        'top': '61px'
      },
      'theme': 'transparent'
    },
    'mobile': {
      'mobile': false
    }
  });

}