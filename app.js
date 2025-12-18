const quotes = require('./quotes.js');
const fs = require('fs').promises;
const random = require('random');

function getNumber(lastNumber){
    let newNumber = random.int((min = 0), (max = 9));
    if (newNumber == lastNumber) {
        return getNumber(lastNumber);
    }else {
        return newNumber;
    }
}

    function fetchRandomQuote(){
        return new Promise(() => {
            setTimeout(() => {
                let n = getNumber(0);
                quoteText.textContent = quotes.getText(citacoes, n);
                quoteAuthor.textContent = quotes.getAuthor(autores, n);

                gsap.fromTo(".quote-container", {
                    x: -40,
                    opacity: 0,
                }, {
                    x: 0,
                    opacity: 100,
                    duration: 2,
                });
            }, 1500);
        });
    }

const citacoes = quotes.getJustQuote();
const autores = quotes.getJustAuthor();

const quoteText = document.querySelector('.citacao');
const quoteAuthor = document.querySelector('.autor');
const newQuote = document.querySelector('#new-quote-button');

async function callback(){
    try {
        const promise = await fetchRandomQuote();
    } catch (error) {
        console.log("ERRO:", error);
    }
}


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

    callback();
});