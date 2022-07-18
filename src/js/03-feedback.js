import localStorageApi from './localstorage';
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
// Визначаємо перемінні
const storageKey = 'feedback-form-state';
const userData = {};
// При заповненні поля форми
const formFieldsFill = () => {
  const userDatafromLS = localStorageApi.load(storageKey);

  if (userDatafromLS === undefined) {
    return;
  }

  const elem = formEl.elements;

  for (const key in userDatafromLS) {
    if (userDatafromLS.hasOwnProperty(key)) {
      elem[key].value = userDatafromLS[key];
    }
  }
};
// Додаємо дані з інпутів в local storage
const onFormElInput = event => {
  const target = event.target;

  const formElValue = target.value;
  const formElName = target.name;

  userData[formElName] = formElValue;

  localStorageApi.save(storageKey, userData);
};

const onFormSubmit = event => {
  event.preventDefault();
  const currentEl = formEl.elements;

  // Очищуємо local storage
  localStorageApi.remove(storageKey);
  console.log(userData);
  // Reset для очищення полів форми
  event.currentTarget.reset();
  //
};
// Додаємо слухачів

formEl.addEventListener('input', throttle(onFormElInput, 500));
formEl.addEventListener('submit', onFormSubmit);

formFieldsFill();
