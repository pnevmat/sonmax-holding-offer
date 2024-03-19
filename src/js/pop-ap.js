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

// close modal buttons
const headerModalCloseBtn = document.querySelector('[header-close-btn]');
const effectiveModelCloseModalBtn = document.querySelector(
  '[effective-model-close-btn]',
);
const specialOfferCloseModalBtn = document.querySelector(
  '[special-offer-close-btn]',
);
const reviewsCloseModalBtn = document.querySelector('[reviews-close-btn]');
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
effectiveModelCloseModalBtn.addEventListener('click', () =>
  closeModal('effectiveModelModalCloseBtn'),
);
specialOfferCloseModalBtn.addEventListener('click', () =>
  closeModal('specialOfferModalCloseBtn'),
);
reviewsCloseModalBtn.addEventListener('click', () =>
  closeModal('reviewsModalCloseBtn'),
);

// Submit form listeners
headerSubmitBtn.addEventListener('click', () => {
  const form = headerModal.children[0].children[0].children[2];

  redirect(form, 'headerSubmitBtn');
});
effectiveModelSubmitBtn.addEventListener('click', () => {
  const form = effectiveModelModal.children[0].children[0].children[2];

  redirect(form, 'effectiveModelSubmitBtn');
});
specialOfferSubmitBtn.addEventListener('click', () => {
  const form = specialOfferModal.children[0].children[0].children[2];

  redirect(form, 'specialOfferSubmitBtn');
});
reviewsSubmitBtn.addEventListener('click', () => {
  const form = reviewsModal.children[0].children[0].children[2];

  redirect(form, 'reviewsSubmitBtn');
});

function openModal(button) {
  if (button === 'headerButton') {
    headerModal.classList.remove('sp-popup-outer');
    headerModal.classList.remove('sp-hide');
    headerModal.classList.remove('sp-force-hide');
  } else if (button === 'effectiveModelButton') {
    console.log('Open efective model modal started');
    effectiveModelModal.classList.remove('sp-popup-outer');
    effectiveModelModal.classList.remove('sp-hide');
    effectiveModelModal.classList.remove('sp-force-hide');
  } else if (button === 'specialOfferButton') {
    specialOfferModal.classList.remove('sp-popup-outer');
    specialOfferModal.classList.remove('sp-hide');
    specialOfferModal.classList.remove('sp-force-hide');
  } else if (button === 'reviewsButton') {
    reviewsModal.classList.remove('sp-popup-outer');
    reviewsModal.classList.remove('sp-hide');
    reviewsModal.classList.remove('sp-force-hide');
  }
}

function closeModal(modal) {
  if (modal === 'headerModalCloseBtn') {
    headerModal.classList.add('sp-popup-outer');
    headerModal.classList.add('sp-hide');
    headerModal.classList.add('sp-force-hide');
  } else if (modal === 'effectiveModelModalCloseBtn') {
    effectiveModelModal.classList.add('sp-popup-outer');
    effectiveModelModal.classList.add('sp-hide');
    effectiveModelModal.classList.add('sp-force-hide');
  } else if (modal === 'specialOfferModalCloseBtn') {
    specialOfferModal.classList.add('sp-popup-outer');
    specialOfferModal.classList.add('sp-hide');
    specialOfferModal.classList.add('sp-force-hide');
  } else if (modal === 'reviewsModalCloseBtn') {
    reviewsModal.classList.add('sp-popup-outer');
    reviewsModal.classList.add('sp-hide');
    reviewsModal.classList.add('sp-force-hide');
  }
}

function redirect(form, modal) {
  const formChildren = [...form.children];
  const inputsList = [];
  formChildren.forEach(child => {
    const children = [...child.children].filter(
      child => child.nodeName === 'INPUT',
    );

    if (children[0] !== undefined) {
      inputsList.push(children[0]);
    }
  });

  if (inputsList.find(input => input.value === '' || input.value === null)) {
    return;
  }

  window.open('https://privatebusiness.academy/finish-reg/');
  closeModal(modal);
}
