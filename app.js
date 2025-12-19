const quoteText = document.querySelector('.citacao');
const quoteAuthor = document.querySelector('.autor');
const newQuote = document.querySelector('#new-quote-button');

function resolver(){
    let n = chance.natural({min: 0, max:9});
            quoteText.textContent = citacoes[n];
            quoteAuthor.textContent = authores[n];

            gsap.fromTo(".quote-container", {
                x: -40,
                opacity: 0,
            }, {
                x: 0,
                opacity: 100,
                duration: 1,
            });
}

function fetchRandomQuote(){
    let delay = chance.natural({min: 1000, max: 2000});

    return new Promise((resolve) => {
        resolve(setTimeout(() => {resolver()}, delay));
    });
}

newQuote.addEventListener('click', async () =>{
    try {
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

        const promise = await fetchRandomQuote();
    } catch (error) {
        console.log("ERRO:", error);
    }
});