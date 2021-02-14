const select = document.querySelector("#select-options");
const minLength = 15;
const maxLength = 100;

const symbolsChbx = document.querySelector("#symbols");
const numbersChbx = document.querySelector("#numbers");
const uppercaseChbx = document.querySelector("#uppercase");
const resultInput = document.querySelector("#result");

const generate = document.querySelector("#generate");
const reset = document.querySelector("#reset");
const copy = document.querySelector("#copy");

const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "`,'#$%^&*()-_=+{}?.~![]<>;:";

for (let i = minLength; i <= maxLength; i++) {
  const opt = document.createElement("option");
  opt.innerHTML = i;
  opt.value = i;
  select.appendChild(opt);
}

function generatePassword() {
  let result = "";
  let characters = lowerCaseLetters;
  const length = select.value;
  if (symbolsChbx.checked) {
    characters += symbols;
  }
  if (numbersChbx.checked) {
    characters += numbers;
  }
  if (uppercaseChbx.checked) {
    characters += upperCaseLetters;
  }

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  resultInput.value = result;
  return result;
}

function copyText() {
  resultInput.select();
  resultInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function resetDOM() {
  symbolsChbx.checked = false;
  resultInput.value = "";
  numbersChbx.checked = false;
  uppercaseChbx.checked = false;
}

generate.addEventListener("click", generatePassword);
copy.addEventListener("click", copyText);

reset.addEventListener("click", resetDOM);
