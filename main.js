const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');
const twitter = document.querySelector('#js-twitter');
const instagram = document.querySelector('#js-instagram');
const github = document.querySelector('#js-github');
const home = document.querySelector('#js-home');

ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});
