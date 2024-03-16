// DOM manipulation - Document Object Model
// declaring variables 
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

// 
email.addEventListener("input", (event) => {
    if (email.validity.valid){
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showError();
    }
});

form.addEventListener("submit", (event) => {
    if (!email.validity.valid){
        showError();
    }
})

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "you need to enter your email address"
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address."
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be atleast  ${email.minLength} characters`
    }
    emailError.className = "error active";
}
