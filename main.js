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

// main slide
let currentPos = 0;
let positionValue = 0;

const IMAGE_WIDTH = 1200;

const prevBtn = document.querySelector('.slide__prev');
const nextBtn = document.querySelector('.slide__next');
const images = document.querySelector('.slide__images');

function next() {
  if (currentPos < 2) {
    positionValue -= IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValue}px)`;
    currentPos += 1;
  }
}

function prev() {
  if (currentPos > 0) {
    positionValue += IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValue}px)`;
    currentPos -= 1;
  }
}

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

// Book list tab menu
let bookTargetLink = document.querySelectorAll('.main__book-button a');
let bookTabContent = document.querySelectorAll('.main__book-content > ul');

for (let i = 0; i < bookTargetLink.length; i++) {
  bookTargetLink[i].addEventListener('click', (e) => {
    e.preventDefault();
    let bookOrgTarget = e.target.getAttribute('href');
    let bookTabTarget = bookOrgTarget.replace('#', '');

    for (let j = 0; j < bookTabContent.length; j++) {
      bookTabContent[j].style.display = 'none';
    }
    document.getElementById(bookTabTarget).style.display = 'block';

    for (let x = 0; x < bookTargetLink.length; x++) {
      bookTargetLink[x].classList.remove('book__active');
      e.target.classList.add('book__active');
    }
  });
}
document.getElementById('book-tab1').style.display = 'block';

// Notice and News tab menu
let noticeTargetLink = document.querySelectorAll('.notice__button a');
let noticeTabContent = document.querySelectorAll('.notice__news-wrap > div');

for (let a = 0; a < noticeTargetLink.length; a++) {
  noticeTargetLink[a].addEventListener('click', (e) => {
    e.preventDefault();
    let noticeOrgTarget = e.target.getAttribute('href');
    let noticeTabTarget = noticeOrgTarget.replace('#', '');

    for (let b = 0; b < noticeTabContent.length; b++) {
      noticeTabContent[b].style.display = 'none';
    }
    document.getElementById(noticeTabTarget).style.display = 'flex';

    for (let c = 0; c < noticeTargetLink.length; c++) {
      noticeTargetLink[c].classList.remove('notice__active');
      e.target.classList.add('notice__active');
    }
  });
}
document.getElementById('notice-tab1').style.display = 'flex';
document.getElementById('notice-tab2').style.display = 'none';

// loop slide
let slides = document.querySelector('.schedule__left-event');
let slide = document.querySelectorAll('.schedule__left-event li');
let currentIdx = 0;
let slideCount = slide.length;
let slideWidth = 250;
let slideMargin = 50;

let eventPrevBtn = document.querySelector('.event__prev');
let eventNextBtn = document.querySelector('.event__next');

makeClone();

function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(function () {
    slides.classList.add('animated');
  });
}

function updateWidth() {
  let currentSlides = document.querySelectorAll('.schedule__left-event li');
  let newSlideCount = currentSlides.length;

  let newWidth =
    (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
  slides.style.width = newWidth;
}

function setInitialPos() {
  let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
}

eventNextBtn.addEventListener('click', () => {
  moveSlide(currentIdx + 1);
});

eventPrevBtn.addEventListener('click', () => {
  moveSlide(currentIdx - 1);
});

function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin) + 'px';
  currentIdx = num;
  if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout(() => {
      slides.classList.remove('animated');
      slides.style.left = '0px';
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add('animated');
    }, 600);
  }
}

// Calendar
let date = new Date();
const goPrevBtn = document.querySelector('.go-prev');
const goTodayBtn = document.querySelector('.go-today');
const goNextBtn = document.querySelector('.go-next');


function renderCalendar() {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  const yearMonth = document.querySelector('.calendar__year-month');
  yearMonth.textContent = `${viewYear}년 ${viewMonth + 1}월`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const prevLastDate = prevLast.getDate();
  const prevLastDay = prevLast.getDay();

  const thisLastDate = thisLast.getDate();
  const thisLastDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(thisLastDate + 1).keys()].slice(1);
  const nextDates = [];

  if (prevLastDay !== 6) {
    for (let i = 0; i < prevLastDay + 1; i++) {
      prevDates.unshift(prevLastDate - i);
    }
  }

  for (let i = 1; i < 7 - thisLastDay; i++) {
    nextDates.push(i);
  }

  const CalendarDates = prevDates.concat(thisDates, nextDates);

	const firstDateIndex = CalendarDates.indexOf(1);
	const lastDateIndex = CalendarDates.lastIndexOf(thisLastDate);
	
	CalendarDates.forEach((date, i) => {
		const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? 'this' : 'other';
		CalendarDates[i] = `<div class="calendar__date"><span class="${condition}">${date}<span></div>`
	})

  document.querySelector('.calendar__dates').innerHTML = CalendarDates.join('');
  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.style.color = 'black';
				date.style.fontWeight = 'bold';
        break;
      }
    }
  }
}

renderCalendar();

function prevMonth() {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
}

function goToday() {
	date = new Date();
	renderCalendar();
}

goPrevBtn.addEventListener('click', prevMonth);
goTodayBtn.addEventListener('click', goToday);
goNextBtn.addEventListener('click', nextMonth);

// calendar prev , next dates opacity
