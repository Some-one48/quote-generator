function getText(number) {
    return citacoes[number].text;
}

function getAuthor(number) {
    return citacoes[number].author;
}

function getNumber(lastNumber){
    if (lastNumber < 9){
        return lastNumber+1;
    }else {
        return 0;
    }
}

const citacoes = [
    c0 = {
        text: "Não é sobre você começa, mas sobre como você termina",
        author: "Michael Phelps"
    },
    c1 = {
        text: "O ser humano deve desenvolver, para todos os seus conflitos, um método que rejeite a vingança, a agressão e a retaliação. A base para esse tipo de método é o amor",
        author: "Martin Luther King Jr."
    },
    c2 = {
        text: "É impossível haver progresso sem mudanças, e aqueles que não conseguem mudar suas mentes nada mudam",
        author: "George Bernard Shaw"
    },
    c3 = {
        text: "Não se enganem. Uma gotinha no oceano faz, sim, muita diferença",
        author: "Zilda Arns"
    },
    c4 = {
        text: "O objetivo da educação é o avanço do conhecimento e a disseminação da verdade",
        author: "John F. Kennedy"
    },
    c5 = {
        text: "É importante não deixar de questionar. A curiosidade tem uma razão de existir",
        author: "Albert Eistein"
    },
    c6 = {
        text: "O homem é por natureza um animal político",
        author: "Aristóteles"
    },
    c7 = {
        text: "O homem está condenado a ser livre; porque uma vez jogado ao mundo, ele é responsável por tudo que faz",
        author: "Jean-Paul Sartre"
    },
    c8 = {
        text: "O coração tem razões que a própria razão desconhece",
        author: "Blaise Pascal"
    },
    c9 = {
        text: "Uma boa ideia é algo que não resolve apenas um único problema, mas sim pode resolver vários problemas de uma só vez",
        author: "Shigeru Miyamoto"
    }
];

const quoteText = document.querySelector('.citacao');
const quoteAuthor = document.querySelector('.autor');
const newQuote = document.querySelector('#new-quote-button');

let ln = 0;
quoteText.textContent = getText(ln);
    quoteAuthor.textContent = getAuthor(ln);

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

    setTimeout(() => {
        let n = getNumber(ln);
        ln = n;
        quoteText.textContent = getText(n);
        quoteAuthor.textContent = getAuthor(n);
    }, 1500);
});