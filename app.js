const quotes = require('./quotes.js');
const random = require('random');

function getNumber(lastNumber){
    let newNumber = random.int((min = 0), (max = 9));
    if (newNumber == lastNumber) {
        lastNumber = newNumber;
        getNumber();
    }else {
        return newNumber;
    }
}

const citacoes = quotes.getJustQuote();
const autores = quotes.getJustAuthor();

const quoteText = document.querySelector('.citacao');
const quoteAuthor = document.querySelector('.autor');
const newQuote = document.querySelector('#new-quote-button');

newQuote.addEventListener('click', () =>{
    Toastify({
        text: "Buscando uma nova citação... ",
        duration: 2000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#aaaeaf",
            color: "#190202",
            //"linear-gradient(to right, #97123a, #aaaeaf, #97123a)",
        },
        //onClick: function(){} // Callback after click
    }).showToast();

    function fetchRandomQuote(){
        return new Promise;
    }

    Promise = () => {
        setTimeout(() => {
            let n = getNumber(ln);
            quoteText.textContent = getText(cite,n);
            quoteAuthor.textContent = getAuthor(cite,n);
        }, 1500);
    };
});