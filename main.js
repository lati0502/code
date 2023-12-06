const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');
const link = document.querySelector('#js-link');
const twitter = document.querySelector('#js-twitter');
const instagram = document.querySelector('#js-instagram');
const github = document.querySelector('#js-github');
const home = document.querySelector('#js-home');

/*
// icon、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
const btn = document.querySelectorAll('.detail-icon');
const modal = document.querySelectorAll('.modal');
const closeBtn = document.querySelectorAll('.close');
const overlay = document.querySelectorAll('.overlay');
const body = document.querySelector('body');
*/


//スクロール
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

ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

// モーダル（ポップアップ）
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

$('a[href^="#"]').click(function(){
  var headerHeight = $(".header").outerHeight(); //ナビゲーションの高さを取得
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "body" : href);
  var position = target.offset().top - headerHeight;
  $("html, body").animate({ scrollTop: position }, 500, "swing"); //500 ←スクロールのスピード
  return false;
});