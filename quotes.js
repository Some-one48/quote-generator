function getQuotesComplex() {
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
    return citacoes;
}

function getJustQuote(){
    const citacoes = [
        "Não é sobre você começa, mas sobre como você termina",
        "O ser humano deve desenvolver, para todos os seus conflitos, um método que rejeite a vingança, a agressão e a retaliação. A base para esse tipo de método é o amor",
        "É impossível haver progresso sem mudanças, e aqueles que não conseguem mudar suas mentes nada mudam",
        "Não se enganem. Uma gotinha no oceano faz, sim, muita diferença",
        "O objetivo da educação é o avanço do conhecimento e a disseminação da verdade",
        "É importante não deixar de questionar. A curiosidade tem uma razão de existir",
        "O homem é por natureza um animal político",
        "O homem está condenado a ser livre; porque uma vez jogado ao mundo, ele é responsável por tudo que faz",
        "O coração tem razões que a própria razão desconhece",
        "Uma boa ideia é algo que não resolve apenas um único problema, mas sim pode resolver vários problemas de uma só vez",
    ];

    return citacoes;
}

function getJustAuthor() {
    const author = [
        "Michael Phelps",
        "Martin Luther King Jr.",
        "George Bernard Shaw",
        "Zilda Arns",
        "John F. Kennedy",
        "Albert Eistein",
        "Aristóteles",
        "Jean-Paul Sartre",
        "Blaise Pascal",
        "Shigeru Miyamoto"
    ];

    return author;
}

function getText(quote, number) {
    return quote[number];
}

function getAuthor(author, number) {
    return author[number];
}

module.exports = {
    getJustQuote,
    getJustAuthor,
    getText,
    getAuthor
};