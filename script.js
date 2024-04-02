let form = document.forms.form;
const button = document.forms.form.elements.button;
console.log(form);
console.log(button);

// button.setAttribute("disabled", "disabled");

const nameInput = form.elements.name;
const nameError = document.getElementById("name-error");
nameError.style.display = "none";
const nameRegExp = /^[a-zA-Zа-яА-ЯЁё\s]+$/;

nameInput.addEventListener("input", function () {
  if (
    nameInput.value.length < 2 ||
    nameInput.value.length > 20 ||
    !nameRegExp.test(nameInput.value)
  ) {
    nameError.style.display = "block";
    nameError.textContent =
      "Имя должно содержать от 2 до 20 символов и состоять только из букв и пробелов";
  } else {
    nameError.style.display = "none";
  }
});

const emailInput = form.elements.email;
const emailError = document.getElementById("email-error");
emailError.style.display = "none";
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

emailInput.addEventListener("input", function () {
  if (!emailRegExp.test(emailInput.value)) {
    emailError.style.display = "block";
    emailError.textContent = "Введите корректный адрес электронной почты";
  } else {
    emailError.style.display = "none";
  }
});

const ageInput = form.elements.age;
const ageError = document.getElementById("age-error");
ageError.style.display = "none";
console.log(ageInput.value);

ageInput.addEventListener("input", function () {
  if (isNaN(ageInput.value) || ageInput.value < 18 || ageInput.value > 120) {
    ageError.style.display = "block";
    ageError.textContent = "Введите корректный возраст";
  } else {
    ageError.style.display = "none";
  }
});

const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");

passwordInput.addEventListener("input", function () {
  if (passwordInput.validity.valid) {
    passwordError.textContent = "";
    passwordError.style.display = "none";
  } else {
    if (passwordInput.value.length < 8) {
      passwordError.textContent = "Пароль должен содержать не менее 8 символов";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(passwordInput.value)) {
      passwordError.textContent =
        "Пароль должен содержать хотя бы одну цифру, одну прописную и одну строчную букву";
    } else {
      passwordError.textContent = "Неверный формат пароля";
    }
    passwordError.style.display = "block";
  }
});

form.elements.consent.addEventListener("input", function () {
  const isNameValid = nameInput.validity.valid;
  const isEmailValid = emailInput.validity.valid;
  const isAgeValid = ageInput.validity.valid;
  const isPasswordValid = passwordInput.validity.valid;

  if (isNameValid && isEmailValid && isAgeValid && isPasswordValid) {
    button.removeAttribute("disabled");
    button.style.cursor = "pointer";
    button.style.backgroundColor = "#6b5f58";
    button.style.color = "#e2ddd6";
  }
});

addEventListener("submit", function (event) {
  event.preventDefault();

  form.reset();
  button.setAttribute("disabled", "disabled");
  button.style.cursor = "default";
  button.style.backgroundColor = "#edede9";
  button.style.boxShadow = " 0 0 10px rgba(0, 0, 0, 0.6)";
  button.style.color = "#777775";
});

const inputs = document.querySelectorAll("input");

inputs.forEach(function (input) {
  input.addEventListener("focus", function () {
    input.style.border = "1px solid ##6b5f58";
  });
  input.addEventListener("blur", function () {
    input.style.border = "";
  });
});
