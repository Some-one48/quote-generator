const fs = require("fs");
//const {int} = require("random");
/*
const quoteText = document.querySelector('#quote-text');
const quoteAuthor = document.querySelector('#quote-author');
const newQuote = document.querySelector('#new-quote-button');
*/
let citacoes = fs.readFile('quotes.json', 'utf8');
for (let i = 0; i < 10; i++){
    citacoes[i] = JSON.parse(citacoes[i]);
    console.log(citacoes[i]);
}
/*
let number = int((min = 1), (max = 10));
quoteText.textContent = getText(number);
quoteAuthor.textContent = getAuthor(number);

newQuote.addEventListener('click', () =>{
    number = int((min = 0), (max = 9));
    quoteText.textContent = getText(number);
    quoteAuthor.textContent = getAuthor(number);
});*/