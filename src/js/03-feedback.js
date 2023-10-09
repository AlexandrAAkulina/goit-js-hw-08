import throttle from 'lodash.throttle';
import '../css/03-feedback.css';
import '../css/common.css';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea[name="message"]');
const input = document.querySelector('input[name="email"]');
const KEY = 'feedback-form-state';
const text = {
        email: '',
        message: '',
    }

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
    text.email = input.value;
    text.message = textarea.value;
    const textJSON = JSON.stringify(text);
    localStorage.setItem(KEY, textJSON);
}

function onFormSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem(KEY);
    form.reset();
    console.log(text);
}

function saveIntoForm() {
    const saveMsg = JSON.parse(localStorage.getItem(KEY));
    
    if (saveMsg) {
        input.value = saveMsg.email;
        textarea.value = saveMsg.message;
        }
        
    }

saveIntoForm();

