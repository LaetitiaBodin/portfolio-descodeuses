export let characters = [
    {
        name: "Leela",
        face: 'W',
        qualities: [ 'optimiste', 'altruiste', 'intuitif'],
        score: 100
    },
    {
        name: "Leelo",
        face: "U",
        qualities: [ 'adorable', 'souriant', 'assuré'],
        score: 100
    }
] 

export let goodChoices = [
    {
        word: 'égocentrique',
        letter: 'Z',
        look: 'ego',
        message: `C'est tout moi !`,
        img: 'egomaniac',
        score: 10
    },
    {
        word: 'asocial',
        letter: 'F',
        look: 'aso',
        message: `M'en fiche !`,
        img: 'asocial',
        score: 20
    },
    {
        word: 'agressif',
        letter: 'A',
        look: 'hos',
        message: `T'as dit quoi ?`,
        img: 'hostile',
        score: 30
    },
    {
        word: 'capricieux',
        letter: 'O',
        look: 'brat',
        message: `Faut voir...`,
        img: 'brat',
        score: 40
    },
    {
        word: 'cinglé',
        letter: 'V',
        look: 'crazy',
        message: `C'est toi<br>qui dit ça ?`,
        img: 'crazy',
        score: 50
    }
];

export let badChoices = [
    {
        word: 'romantique',
        letter: 'M',
        look: 'love',
        message: `Ciao Bella !`,
        img:'love',
        score: -10
    },
    {
        word: 'cérébral',
        letter: 'R',
        look: 'smart',
        message: `C'est pas faux `,
        img: 'smart',
        score: -20
    },
    {
        word: 'familier',
        letter: 'Q',
        look: 'friend',
        message: `Comment ça va ?`,
        img: 'friend',
        score: -30
    },
    {
        word: 'intrépide',
        letter: 'C',
        look: 'bold',
        message: `C'est parti !`,
        img: 'bold',
        score: -40
    },
    {
        word: 'pacifique',
        letter: 'L',
        look: 'calm',
        message: `Qui me parle ?`,
        img: 'calm',
        score: -50
    }
];

export let resultFaces = {
    win: 'N',
    lose: 'I'
};
