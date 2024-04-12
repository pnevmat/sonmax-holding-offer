// 'http://http://localhost:1234/?utm_source={source}&utm_medium=ts_k&utm_campaign=mk_8.04_kab1&utm_content={advertisingName}&utm_term={adsetName}'

const urlWithUtms = window.location;
console.log('Url with utms: ', urlWithUtms);
// Open modal buttons
const specialOfferProButton = document.querySelector(
  '[special-offer-pro-button]',
);
const specialOfferPrimeButton = document.querySelector(
  '[special-offer-prime-button]',
);
// const reviewsButton = document.querySelector('[reviews-button]');

// Modals
const specialOfferOverlay = document.querySelector('[special-offer-overlay]');
// const reviewsOverlay = document.querySelector('[reviews-overlay]');
const specialOfferProModal = document.querySelector(
  '[special-offer-modal-pro]',
);
const specialOfferPrimeModal = document.querySelector(
  '[special-offer-modal-prime]',
);
// const reviewsModal = document.querySelector('[reviews-modal]');

// close modal buttons
const specialOfferProCloseModalBtn = document.querySelector(
  '[special-offer-pro-close-btn]',
);
const specialOfferPrimeCloseModalBtn = document.querySelector(
  '[special-offer-prime-close-btn]',
);
// const reviewsCloseModalBtn = document.querySelector('[reviews-close-btn]');

// Submit form buttons
const specialOfferProSubmitBtn = document.querySelector(
  '[special-offer-pro-submit-btn]',
);
const specialOfferPrimeSubmitBtn = document.querySelector(
  '[special-offer-prime-submit-btn]',
);
// const reviewsSubmitBtn = document.querySelector('[reviews-submit-btn]');

// Open modal listeners
specialOfferProButton.addEventListener('click', () =>
  openModal('specialOfferProButton'),
);
specialOfferPrimeButton.addEventListener('click', () =>
  openModal('specialOfferPrimeButton'),
);
// reviewsButton.addEventListener('click', () => openModal('reviewsButton'));

// Close modal listeners
specialOfferProCloseModalBtn.addEventListener('click', () =>
  closeModal('specialOfferProModalCloseBtn'),
);
specialOfferPrimeCloseModalBtn.addEventListener('click', () =>
  closeModal('specialOfferPrimeModalCloseBtn'),
);
// reviewsCloseModalBtn.addEventListener('click', () =>
//   closeModal('reviewsModalCloseBtn'),
// );

// Submit form listeners
specialOfferProSubmitBtn.addEventListener('click', () => {
  const form = specialOfferProModal.children[0].children[0].children[2];

  redirect(form, 'specialOfferProSubmitBtn');
});
specialOfferPrimeSubmitBtn.addEventListener('click', () => {
  const form = specialOfferProModal.children[0].children[0].children[2];

  redirect(form, 'specialOfferPrimeSubmitBtn');
});
// reviewsSubmitBtn.addEventListener('click', () => {
//   const form = reviewsModal.children[0].children[0].children[2];

//   redirect(form, 'reviewsSubmitBtn');
// });

function openModal(button) {
  if (button === 'headerButton') {
    headerModal.classList.remove('sp-popup-outer');
    headerModal.classList.remove('sp-hide');
    headerModal.classList.remove('sp-force-hide');
  } else if (button === 'effectiveModelButton') {
    effectiveModelModal.classList.remove('sp-popup-outer');
    effectiveModelModal.classList.remove('sp-hide');
    effectiveModelModal.classList.remove('sp-force-hide');
  } else if (button === 'specialOfferProButton') {
    specialOfferOverlay.classList.remove('is-hiden');
    specialOfferProModal.classList.remove('sp-popup-outer');
    specialOfferProModal.classList.remove('sp-hide');
    specialOfferProModal.classList.remove('sp-force-hide');
  } else if (button === 'specialOfferPrimeButton') {
    specialOfferOverlay.classList.remove('is-hiden');
    specialOfferPrimeModal.classList.remove('sp-popup-outer');
    specialOfferPrimeModal.classList.remove('sp-hide');
    specialOfferPrimeModal.classList.remove('sp-force-hide');
  }
  // else if (button === 'reviewsButton') {
  //   reviewsOverlay.classList.remove('is-hiden');
  //   reviewsModal.classList.remove('sp-popup-outer');
  //   reviewsModal.classList.remove('sp-hide');
  //   reviewsModal.classList.remove('sp-force-hide');
  // }
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
  } else if (modal === 'specialOfferProModalCloseBtn') {
    specialOfferOverlay.classList.add('is-hiden');
    specialOfferProModal.classList.add('sp-popup-outer');
    specialOfferProModal.classList.add('sp-hide');
    specialOfferProModal.classList.add('sp-force-hide');
  } else if (modal === 'specialOfferPrimeModalCloseBtn') {
    specialOfferOverlay.classList.add('is-hiden');
    specialOfferPrimeModal.classList.add('sp-popup-outer');
    specialOfferPrimeModal.classList.add('sp-hide');
    specialOfferPrimeModal.classList.add('sp-force-hide');
  }
  // else if (modal === 'reviewsModalCloseBtn') {
  //   reviewsOverlay.classList.add('is-hiden');
  //   reviewsModal.classList.add('sp-popup-outer');
  //   reviewsModal.classList.add('sp-hide');
  //   reviewsModal.classList.add('sp-force-hide');
  // }
}

function redirect(form, modal) {
  // const formChildren = [...form.children];
  // const inputsList = [];
  // formChildren.forEach(child => {
  //   const children = [...child.children].filter(
  //     child => child.nodeName === 'INPUT',
  //   );

  //   if (children[0] !== undefined) {
  //     inputsList.push(children[0]);
  //   }
  // });

  // if (inputsList.find(input => input.value === '' || input.value === null)) {
  //   return;
  // }

  // window.open('https://privatebusiness.academy/finish-reg/');
  closeModal(modal);
}
