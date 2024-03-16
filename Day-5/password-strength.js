/**
 * Password validator for login pages
 */
document.addEventListener("DOMContentLoaded", function() {
const form = document.querySelector("form")
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error")
// import value from 'assets/scss/_themes-vars.module.scss';
const errorMain = "#f44336";
const warningDark = "#ffc107";
const orangeMain = "#ffab91";
const successMain = "#00e676";
const successDark = "#00c853";

// has number
const hasNumber = (number) => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
const hasMixed = (number) => new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// has special chars
const hasSpecial = (number) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);


// set color based on password strength
const strengthColor = (count) => {
  if (count < 2) return { label: 'Poor', color: errorMain};
  if (count < 3) return { label: 'Weak', color: warningDark };
  if (count < 4) return { label: 'Normal', color: orangeMain };
  if (count < 5) return { label: 'Good', color: successMain };
  if (count < 6) return { label: 'Strong', color: successDark };
  return { label: 'Poor', color: errorMain };
};

// password strength indicator
const strengthIndicator = (number) => {
  let strengths = 0;
  if (number.length > 5) strengths += 1;
  if (number.length > 7) strengths += 1;
  if (hasNumber(number)) strengths += 1;
  if (hasSpecial(number)) strengths += 1;
  if (hasMixed(number)) strengths += 1;
  return strengths;
};

const rules = {
  length: { test: (password) => password.length >= 8, element: document.getElementById('length') },
  number: { test: hasNumber, element: document.getElementById('number') },
  mixed: { test: hasMixed, element: document.getElementById('mixed') },
  special: { test: hasSpecial, element: document.getElementById('special') },
};

password.addEventListener("input", (event) => {
  const passwordValue = password.value;
  const passwordStrength = strengthIndicator(passwordValue);
  const passwordStrengthColor = strengthColor(passwordStrength);

  password.style.borderColor = passwordStrengthColor.color
  passwordError.textContent = passwordStrengthColor.label;
  passwordError.style.color = passwordStrengthColor.color;

  for (const rule in rules) {
    if (rules[rule].test(passwordValue)) {
      rules[rule].element.style.color = successMain;
    } else {
      rules[rule].element.style.color = errorMain;
    }
  }

  if (passwordStrengthColor.label === 'Poor') {
   passwordError.textContent += `${rulesMessage}`;
    passwordError.style.display = 'block';
    console.log(error)
  } else {
    passwordError.style.display = 'none';
  }
})

// confirmPassword
const confirmPassword = document.getElementById("confirmPassword");
  const confirmPasswordError = document.querySelector("#confirmPassword + span.error");

  confirmPassword.addEventListener("input", (event) => {
    if (password.value !== confirmPassword.value) {
      confirmPassword.style.borderColor = errorMain;
      confirmPasswordError.textContent = 'Passwords do not match';
      confirmPasswordError.style.color = errorMain;
      confirmPasswordError.style.display = 'block';
    } else {
      confirmPassword.style.borderColor = successMain;
      confirmPasswordError.textContent = 'Passwords match';
      confirmPasswordError.style.color = successMain;
      confirmPasswordError.style.display = 'block';
    }
  });


  const inputs = document.querySelectorAll('input');
  // const form = document.querySelector('form');
  
  inputs.forEach(input => {
      input.addEventListener('blur', (event) => {
        if (input.value.trim() === '') {
          input.classList.add('errorEmpty');
        } else {
          input.classList.remove('errorEmpty');
        }
      });

      input.addEventListener('input', (event) => {
        if (input.value.trim() !== '') {
          input.classList.remove('errorEmpty');
        }
      });
     
    });
  
    form.addEventListener('submit', (event) => {
      const errors = document.querySelectorAll('.errorEmpty');
      if (errors.length > 0) {
        event.preventDefault();
        alert('Please fill out all required fields.');
      }
    });
});