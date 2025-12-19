const quoteText = document.querySelector('.citacao');
const quoteAuthor = document.querySelector('.autor');
const newQuote = document.querySelector('#new-quote-button');

function randomQuote(delay, n){
    return new Promise(resolver => {
        setTimeout(() => {
            resolver (citacoes[n]);
        }, delay);
    });
}

function randomAuthor(delay, n){
    return new Promise(resolverA => {
        setTimeout(() => {
            resolverA (authores[n]);
        }, delay);
    });
}

newQuote.addEventListener('click', async () =>{
    try {
        let delay = chance.natural({min: 1000, max: 2000});
        let n = chance.natural({min: 0, max:9});

        Toastify({
            text: "Buscando uma nova citação... ",
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
                background: "#aaaeaf",
                color: "#190202",
            },
        }).showToast();

        const quote = await randomQuote(delay, n);
        const author = await randomAuthor(delay, n);

        quoteText.textContent = quote;
        quoteAuthor.textContent = author;

        gsap.fromTo(".quote-container", {
                x: -40,
                opacity: 0,
            }, {
                x: 0,
                opacity: 100,
                duration: 1,
            });
    } catch (error) {
        console.log("ERRO:", error);
    }
});