document.addEventListener('DOMContentLoaded', function () {
  const modals = ['data-thank-subscribe', 'data-order', 'data-thank-you'];

  modals.forEach(element => {
    const openModalSelector = `[${element}-open]`;
    const closeModalSelector = `[${element}-close]`;
    const openModalBtns = document.querySelectorAll(openModalSelector);
    const closeModalBtns = document.querySelectorAll(closeModalSelector);
    const modal = document.querySelector(`[${element}]`);

    if (!modal) logModalError('Can`t find Modal with attribute ' + modal);
    if (openModalBtns.length === 0)
      logModalError(
        'Can`t find Open modal button with attribute ' + openModalSelector
      );
    if (closeModalBtns.length === 0)
      logModalError(
        'Can`t find Close modal button with attribute ' + closeModalSelector
      );

    openModalBtns.forEach(openBtn =>
      openBtn.addEventListener('click', toggleModal)
    );
    closeModalBtns.forEach(closeBtn =>
      closeBtn.addEventListener('click', toggleModal)
    );

    function toggleModal(evt) {
      evt.preventDefault();
      document.body.classList.toggle('modal-open');
      modal.classList.toggle('is-hidden');
    }
  });

  function logModalError(text) {
    const styles = 'color: #bada55';
    console.log('%c' + text, styles);
  }

  const form = document.querySelector('#myForm');
  const submitButton = document.querySelector('#submitButton');
  const fullnameInput = document.querySelector('#fullname');
  const emailInput = document.querySelector('#emailform');
  const cardInput = document.querySelector('#card');
  const resetButton = document.querySelector('#resetButton');

  form.addEventListener('submit', validateForm);
  fullnameInput.addEventListener('input', validateForm);
  emailInput.addEventListener('input', validateForm);
  cardInput.addEventListener('input', validateForm);
  resetButton.addEventListener('click', resetForm);

  function validateForm(event) {
    event.preventDefault();

    const nameValue = fullnameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const cardValue = cardInput.value.trim();

    const emailPattern = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
    const isEmailValid = emailPattern.test(emailValue);
    submitButton.classList.add('inactive');

    if (nameValue === '' || !isEmailValid || cardValue === '') {
      submitButton.disabled = true;
      submitButton.classList.add('inactive');
    } else {
      submitButton.disabled = false;
      submitButton.classList.remove('inactive');
    }
  }

  function resetForm() {
    form.reset();
    submitButton.disabled = true;
    submitButton.classList.add('inactive');
  }

  submitButton.addEventListener('mouseenter', function () {
    if (submitButton.disabled) {
      submitButton.style.borderColor = 'red';
    }
  });

  submitButton.addEventListener('mouseleave', function () {
    if (submitButton.disabled) {
      submitButton.style.borderColor = '';
    }
  });
  validateForm(new Event('input'));

  const subfForm = document.querySelector('#subForm');
  const subButtonSubscrible = document.querySelector('#subscribleButton');
  const subEmailInput = document.querySelector('#subEmail');

  subfForm.addEventListener('submit', validateFormSubscribe);
  subEmailInput.addEventListener('input', validateFormSubscribe);

  function validateFormSubscribe(event) {
    event.preventDefault();
    const subEmailValue = subEmailInput.value.trim();

    const subEmailPattern = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
    const isSubEmailValid = subEmailPattern.test(subEmailValue);
    subButtonSubscrible.classList.add('inactive');

    if (!isSubEmailValid) {
      subButtonSubscrible.disabled = true;
      subButtonSubscrible.classList.add('inactive');
    } else {
      subButtonSubscrible.disabled = false;
      subButtonSubscrible.classList.remove('inactive');
    }
  }
  validateFormSubscribe(new Event('input'));
});
