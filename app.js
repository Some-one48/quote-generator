

import connected from './quotes.js';
const random = require('random');

console.log("App conectado!");

console.log(connected());

const quoteText = document.querySelector('#quote-text');
const quoteAuthor = document.querySelector('#quote-author');
const newQuote = document.querySelector('#new-quote-button');

let number = int((min = 0), (max = 9));
quoteText.textContent = quotes.getText(number);
quoteAuthor.textContent = quotes.getAuthor(number);

newQuote.addEventListener('click', () =>{
    number = int((min = 0), (max = 9));
    quoteText.textContent = quotes.getText(number);
    quoteAuthor.textContent = quotes.getAuthor(number);
});