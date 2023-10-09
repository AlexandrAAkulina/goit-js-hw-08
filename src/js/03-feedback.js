import throttle from 'lodash.throttle';
import '../css/03-feedback.css';
import '../css/common.css';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('[name="message"]');
const input = document.querySelector('[name="email"]');
const key = 'feedback-form-state';

// const formData = {
//   email: input.value,
//   message: textarea.value,
// };
// localStorage.setItem(storage, JSON.stringify(formData));

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    const text = {
        email: '',
        message: '',
    }
    text.email = input.value;
    text.message = textarea.value;
    const textJSON = JSON.stringify(text);
    localStorage.setItem(key, textJSON);
}

function onFormSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem(key);
    form.reset();
    console.log(JSON.parse(localStorage.getItem(key)));
}

function saveIntoForm(evt) {
    const saveMsg = JSON.parse(localStorage.getItem(key));
    if (saveMsg) {
        input.value = saveMsg.email;
        textarea.value = saveMsg.message;
    }
}
saveIntoForm();

