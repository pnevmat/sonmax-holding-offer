// faq
// q:1
// qBtn:1
// plus:1
// minus:1

const length = document.getElementById('faq').children.length;

for (let i = 0; i < length; i++) {
  const btn = document.getElementById(`qBtn:${i + 1}`);

  btn.addEventListener('click', () => {
    const plusImg = document.getElementById(`plus:${i + 1}`);
    const minusImg = document.getElementById(`minus:${i + 1}`);
    const question = document.getElementById(`q:${i + 1}`);
    plusImg.classList.toggle('is-hiden');
    minusImg.classList.toggle('is-hiden');
    question.classList.toggle('open');
  });
}
