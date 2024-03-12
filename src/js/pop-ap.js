// Open modal buttons
const headerButton = document.querySelector('[header-button]');
const effectiveModelButton = document.querySelector('[effective-model-button]');
const specialOfferButton = document.querySelector('[special-offer-button]');
const reviewsButton = document.querySelector('[reviews-button]');

// Modals
const headerModal = document.querySelector('[header-modal]');
const effectiveModelModal = document.querySelector('[effective-model-modal]');
const specialOfferModal = document.querySelector('[special-offer-modal]');
const reviewsModal = document.querySelector('[reviews-modal]');

// Close modal buttons
const headerModalCloseBtn = document.querySelector('[header-close-btn]');
const effectiveModelModalCloseBtn = document.querySelector(
  '[effective-model-close-btn]',
);
const specialOfferModalCloseBtn = document.querySelector(
  '[special-offer-close-btn]',
);
const reviewsModalCloseBtn = document.querySelector('[reviews-close-btn]');

// Submit form buttons
const headerSubmitBtn = document.querySelector('[header-submit-btn]');
const effectiveModelSubmitBtn = document.querySelector(
  '[effective-model-submit-btn]',
);
const specialOfferSubmitBtn = document.querySelector(
  '[special-offer-submit-btn]',
);
const reviewsSubmitBtn = document.querySelector('[reviews-submit-btn]');

// Open modal listeners
headerButton.addEventListener('click', () => openModal('headerButton'));
effectiveModelButton.addEventListener('click', () =>
  openModal('effectiveModelButton'),
);
specialOfferButton.addEventListener('click', () =>
  openModal('specialOfferButton'),
);
reviewsButton.addEventListener('click', () => openModal('reviewsButton'));

// Close modal listeners
headerModalCloseBtn.addEventListener('click', () =>
  closeModal('headerModalCloseBtn'),
);
effectiveModelModalCloseBtn.addEventListener('click', () =>
  closeModal('effectiveModelModalCloseBtn'),
);
specialOfferModalCloseBtn.addEventListener('click', () =>
  closeModal('specialOfferModalCloseBtn'),
);
reviewsModalCloseBtn.addEventListener('click', () =>
  closeModal('reviewsModalCloseBtn'),
);

// Submit form listeners
headerSubmitBtn.addEventListener('click', () =>
  submitForm(null, 'headerModalCloseBtn'),
);
effectiveModelSubmitBtn.addEventListener('click', () =>
  submitForm(null, 'effectiveModelModalCloseBtn'),
);
specialOfferSubmitBtn.addEventListener('click', () =>
  submitForm(null, 'specialOfferModalCloseBtn'),
);
reviewsSubmitBtn.addEventListener('click', () =>
  submitForm(null, 'reviewsModalCloseBtn'),
);

function openModal(button) {
  if (button === 'headerButton') {
    headerModal.classList.remove('is-hiden');
  } else if (button === 'effectiveModelButton') {
    effectiveModelModal.classList.remove('is-hiden');
  } else if (button === 'specialOfferButton') {
    specialOfferModal.classList.remove('is-hiden');
  } else if (button === 'reviewsButton') {
    reviewsModal.classList.remove('is-hiden');
  }
}

function closeModal(modal) {
  if (modal === 'headerModalCloseBtn') {
    headerModal.classList.add('is-hiden');
  } else if (modal === 'effectiveModelModalCloseBtn') {
    effectiveModelModal.classList.add('is-hiden');
  } else if (modal === 'specialOfferModalCloseBtn') {
    specialOfferModal.classList.add('is-hiden');
  } else if (modal === 'reviewsModalCloseBtn') {
    reviewsModal.classList.add('is-hiden');
  }
}

function submitForm(data, modal) {
  closeModal(modal);
}
