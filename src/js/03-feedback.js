import throttle from 'lodash.throttle';
import '../css/03-feedback.css';
import '../css/common.css';

const form = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
    const inputValue = event.target.value.trim();
    const inputName = event.target.name;
    formData[inputName] = inputValue;
    localStorage.setItem(KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem(KEY);
    evt.target.reset();
    console.log(formData);
    formData = {};
}

function saveIntoForm() {
    try {
        const savedData = localStorage.getItem(KEY);
        if (!savedData) return;
        formData = JSON.parse(savedData);
        Object.entries(formData).forEach(([key, val]) => {
            form.elements[key].value = val;
        })
    } catch ({ message }) {
        console.log(message);
    };    
    }

saveIntoForm();
