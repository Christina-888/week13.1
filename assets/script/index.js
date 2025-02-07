const button = document.getElementById('btn');
const birthdayInput = document.getElementById('birthday');
const error = document.getElementById('error-message');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  const birthdayInputValue = birthdayInput.value;

if (!birthdayInputValue) {
  error.style.display = "block";
  error.style.color = "red";
  message.textContent = "";
  return;
} else {
  error.style.display = "none";
}

//Переменные для текущей даты и ДР пользователя:
const date = new Date();
let userDate = new Date(birthdayInputValue);

const thisYear = date.getFullYear();
userDate.setFullYear(thisYear);

// Если ДР уже был:
if (userDate <= date) {
  const takeYear = userDate.getFullYear() + 1;
    userDate.setFullYear(takeYear);
}

let diff = Math.ceil((userDate - date) / (1000 * 60 * 60 * 24));

message.textContent = 'До вашего дня рождения осталось дней: ' + diff;
});