const formData = {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handlerInput);

function handlerInput(evt) {
    evt.preventDeafult();

    if (evt.target.name === 'email') {
        formData.email = evt.target.value.trim();
    }

    if (evt.target.name === 'message') {
        formData.message = evt.target.value.trim();
    }
    localStorage.setItem('feedback-from-state', JSON.stringify(formData));

}

const emailInput = document.getElementsByName('email');
const messageInput = document.getElementsByName('message');
const saveData = localStorage.getItem('feedback-from-state');

function fillForm() {
    if (saveData) {
        const parseData = JSON.parse(saveData);
        formData.email = parseData.email;
        formData.message = parseData.message;
        emailInput[0].value = formData.email;
        messageInput[0].value = formData.message;
    }
}

fillForm();

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDeafult();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.removeItem('feedback-form-state');
    form.reset();
}