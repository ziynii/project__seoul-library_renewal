'use strict';

let qnaContent = document.querySelectorAll('.qna__content');

for (let i = 0; i < qnaContent.length; i++) {
  qnaContent[i].addEventListener('click', (e) => {
    for (let j = 0; j < qnaContent.length; j++) {
      qnaContent[j].classList.remove('qna__active');
    }
    e.currentTarget.classList.add('qna__active');
  });
}
