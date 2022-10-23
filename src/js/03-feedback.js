import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener("submit", handleSubmitForm);
form.addEventListener("input", throttle(handleInputForm, 500));

const feedbackFormStateString = localStorage.getItem("feedback-form-state");
let feedbackFormState = feedbackFormStateString && JSON.parse(feedbackFormStateString) || {};

email.value = feedbackFormState.email ? feedbackFormState.email : '';
message.value = feedbackFormState.message ? feedbackFormState.message : '';

function handleSubmitForm(event) {
    event.preventDefault();
    console.log(`Email: ${email.value}, Message: ${message.value}`);
    localStorage.removeItem("feedback-form-state");
    form.reset();
};

function handleInputForm (event) {
    const {nodeName, value} = event.target;
    switch (nodeName) {
        case 'INPUT':
            feedbackFormState.email = value;
            localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
            break;
        case 'TEXTAREA':
            feedbackFormState.message = value;
            localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
            break;
        default:
            break;
    }
}
