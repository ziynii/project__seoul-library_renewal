'use strict';

// nav menu
let header = document.querySelector('header');
let mainMenuList = document.querySelectorAll('.navbar__menu > li');
let subMenu = document.querySelectorAll('.navbar__depth-wrap');
let headerHeight = header.offsetHeight;
let subMenuHeight = 0;

for (let i = 0; i < mainMenuList.length; i++) {
  mainMenuList[i].addEventListener('mouseover', function () {
    subMenuHeight = this.querySelector('ul').offsetHeight;
    header.style.height = headerHeight + subMenuHeight + 'px';
  });
  mainMenuList[i].addEventListener('mouseout', function () {
    header.style.height = headerHeight + 'px';
  });
}

