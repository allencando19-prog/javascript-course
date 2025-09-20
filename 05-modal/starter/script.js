'use strict';

// modal elements

const modalEl = document.querySelector('.modal');

// overlay modal
const overlayEl = document.querySelector('.overlay');

// close modal
const btnCloseModalEl = document.querySelector('.close-modal');

// open modal
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnsOpenModalEl.length);

const openModal = function () {
  // remove hidden class name in modal
  modalEl.classList.remove('hidden');

  // remove hidden class name in overlay
  overlayEl.classList.remove('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

const closeModal = function () {
  // add hidden class name in modal
  modalEl.classList.add('hidden');

  overlayEl.classList.add('hidden');
};

btnCloseModalEl.addEventListener('click', closeModal);
