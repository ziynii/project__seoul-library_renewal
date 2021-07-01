// main slide
let currentPos = 0;
let positionValue = 0;

const IMAGE_WIDTH = 1200

const prevBtn = document.querySelector('.slide__prev');
const nextBtn = document.querySelector('.slide__next');
const images = document.querySelector('.slide__images');

function next() {
  if (currentPos < 2) {
    positionValue -= IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValue}px)`;
    currentPos += 1;
  }
};

function prev() {
	if (currentPos > 0) {
		positionValue += IMAGE_WIDTH;
		images.style.transform = `translateX(${positionValue}px)`;
		currentPos -= 1;
	}
}

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);