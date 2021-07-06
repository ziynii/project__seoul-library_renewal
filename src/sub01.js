'use strict'

// check-book tab menu
let checkTargetLink = document.querySelectorAll('.check__btn a');
let checkTabContent = document.querySelectorAll('.check__con > ul');

for (let i = 0; i < checkTargetLink.length; i++) {
  checkTargetLink[i].addEventListener('click', (e) => {
    e.preventDefault();
    let checkOrgTarget = e.target.getAttribute('href');
    let checkTabTarget = checkOrgTarget.replace('#', '');

    for (let j = 0; j < checkTabContent.length; j++) {
      checkTabContent[j].style.display = 'none';
    }
    document.getElementById(checkTabTarget).style.display = 'flex';

    for (let x = 0; x < checkTargetLink.length; x++) {
      checkTargetLink[x].classList.remove('check__active');
      e.target.classList.add('check__active');
    }
  });
}
document.getElementById('check-tab1').style.display = 'flex';