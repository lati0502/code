const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');
const link = document.querySelector('#js-link');
const twitter = document.querySelector('#js-twitter');
const instagram = document.querySelector('#js-instagram');
const github = document.querySelector('#js-github');
const home = document.querySelector('#js-home');


/*  スクロール  */
const scorrllLinks = document.querySelectorAll('a[href^="#"]');
scorrllLinks.forEach((scorrllLink) => {
  scorrllLink.addEventListener("click", (e) => {
    e.preventDefault();
    const hrefLink = scorrllLink.getAttribute("href");
    const targetContent = document.getElementById(hrefLink.replace("#", ""));
    const rectTop = targetContent.getBoundingClientRect().top;
    const positionY = window.pageYOffset;
    const target = rectTop + positionY;
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
});

/*  ハンバーガーメニュー  */
ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

/*  ハンバーガーメニュー押したら閉じる  */
$('.nav-items__item').on('click', function() {
  $('.header__nav').removeClass('active');
  $('.hamburger').removeClass('active');
})

/*  モーダル（ポップアップ) */
const modalBtn = document.querySelectorAll('.js_modalBtnCont');
const modalWindow = document.querySelectorAll('.js_modalWrap');
const modalClose = document.querySelectorAll('.js_modalClose');
const modalBG = document.querySelectorAll('.js_modalBG');

window.addEventListener('DOMContentLoaded', function () {
  for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', function (e) {
      e.preventDefault();
      $('body').css('overflow-y', 'hidden');  // 本文の縦スクロールを無効
      let dataModalBtn = modalBtn[i].getAttribute('data-modal-btn');
      for (let j = 0; j < modalWindow.length; j++) {
        if (modalWindow[j].getAttribute('data-modal-cont') === dataModalBtn) {
          modalWindow[j].classList.add('active');
        }
      }
    })
    modalBG[i].addEventListener('click', function () {
      $('body').css('overflow-y','auto');     // 本文の縦スクロールを有効
      modalWindow[i].classList.add('active2');
      setTimeout(function() {
        modalWindow[i].classList.remove('active');
        modalWindow[i].classList.remove('active2');
      }, 300);
    })
    modalClose[i].addEventListener('click', function () {
      $('body').css('overflow-y','auto');     // 本文の縦スクロールを有効
      modalWindow[i].classList.add('active2');
      setTimeout(function() {
        modalWindow[i].classList.remove('active');
        modalWindow[i].classList.remove('active2');
      }, 300);
    })
  }
});

/*  アニメーション  */
$(window).on('load scroll', function (){

  var box = $('.fadein');
  var animated = 'animated';

  box.each(function(){

    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > boxOffset - wh + 100 ){
      $(this).addClass(animated);
    }
  });

});

/*  リンク制御  */
$('a[href^="#"]').click(function(){
  var headerHeight = $(".header").outerHeight(); //ナビゲーションの高さを取得
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "body" : href);
  var position = target.offset().top - headerHeight;
  $("html, body").animate({ scrollTop: position }, 500, "swing"); //500 ←スクロールのスピード
  return false;
});

/*  スマホのホバー  */
$('.mobile-hover')
    .bind('touchstart', function(){
        $(this).addClass('hover');
    }).bind('touchend', function(){
        $(this).removeClass('hover');
});

/*  Contactフォーム */
let submitted = false;
const onloadFrame = () => {
// 送信完了の場合に指定ページに遷移させる
if (submitted) {
  window.location = "thanks.html";
  }
}

/*  ページトップボタン  */
// セレクタ名（.pagetop）に一致する要素を取得
const pagetop_btn = document.querySelector(".pagetop");

// .pagetopをクリックしたら
pagetop_btn.addEventListener("click", scroll_top);

// ページ上部へスムーズに移動
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// スクロールされたら表示
window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}