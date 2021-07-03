'use strict';

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
		document.getElementById(noticeTabTarget).style.display = 'flex'

		for (let c = 0; c < noticeTargetLink.length; c++) {
			noticeTargetLink[c].classList.remove('notice__active');
			e.target.classList.add('notice__active');
		}
	});
}
document.getElementById('notice-tab1').style.display = 'flex';
document.getElementById('notice-tab2').style.display = 'none'