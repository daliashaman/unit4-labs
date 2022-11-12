const letters = document.getElementById('dropdown-letters');
const numbers = document.getElementById('dropdown-numbers');

const lettersPage = document.getElementById('letters');
const numbersPage = document.getElementById('numbers');

letters.addEventListener('click', () => {
    lettersPage.classList.remove('hidden');
    numbersPage.classList.add('hidden');
    });

numbers.addEventListener('click', () => {
    lettersPage.classList.add('hidden');
    numbersPage.classList.remove('hidden');
    });