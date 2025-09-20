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

let lastFocusedButton = null;

const openModal = function () {
  // remove hidden class name in modal
  modalEl.classList.remove('hidden');

  // remove hidden class name in overlay
  overlayEl.classList.remove('hidden');

  modalEl.focus();
  lastFocusedButton = document.activeElement;
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

const closeModal = function () {
  // add hidden class name in modal
  modalEl.classList.add('hidden');

  overlayEl.classList.add('hidden');
  if (lastFocusedButton) lastFocusedButton.focus();
};

btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');

btnCloseModalEl.setAttribute('aria-label', 'Close modal');
