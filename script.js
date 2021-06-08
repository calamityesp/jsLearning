'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  //getting the coordinates of the section we want to scroll too
  const s1coords = section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset);
});

// //lecture

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const allSection = document.querySelectorAll('.section');
// console.log(allSection); //nodeList  selection

// document.getElementById('section--1');
// const buttons = document.getElementsByTagName('button');
// console.log(buttons); //html selection (live selection)
// //html selection will live update automatically

// console.log(document.getElementsByClassName('btn'));

// //creating and inserting elements
// // .insertAdjacentHTML

// //---------------------------------------------------
// //              Cookie Message
// //----------------------------------------------------
// const message = document.createElement('div');
// message.classList.add('cookie-message');

// // message.textContent =
// // 'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics' +
//   '<button class="btn btn--close-cookie">Got it!</button>';

// const header = document.querySelector('.header');
// // header.prepend(message);
// // header.append(message);
// // header.append(message.cloneNode(true));
// header.append(message); //set message as last element

// //delete element
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function (e) {
//     e.preventDefault();
//     message.remove();
//     //below is the traverse way of removing element
//     // message.parentElement.removeChild(message);
//   });

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(getComputedStyle(message).color);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');
// const logo = document.querySelector('.nav__logo');

// //setting attribute values
// logo.alt = 'Beautiful Minimalist logo';
// logo.setAttribute('company', 'Bankist');

// //attributes
// console.log(logo.alt);
// console.log(logo.src);

// //non-standard
// console.log(logo.getAttribute('company'));
// console.log(logo.dataset.versionNumber);

// logo.classList.add('');
// logo.classList.remove('');
// logo.classList.toggle('');
// logo.classList.contains('');

// //dont use
// logo.className = 'Keylan';
