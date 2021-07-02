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
		e.preventDefault()
    let bookOrgTarget = e.target.getAttribute('href');
    console.log(bookOrgTarget);

    let bookTabTarget = bookOrgTarget.replace('#', '');

		for (let j = 0; j < bookTabContent.length; j++) {
			bookTabContent[j].style.display = 'none'
		}
    document.getElementById(bookTabTarget).style.display = 'block';

		for (let x = 0; x < bookTargetLink.length; x++) {
			bookTargetLink[x].classList.remove('book__active');
			e.target.classList.add('book__active');
		}
  });
}
document.getElementById('book-tab1').style.display = 'block';


