$(document).ready(function () {
    // En cas de rafraîchissement de la page, force le vidage de l'input.
    $("input").val("");
});

let guesses = 0;
// Le +1 sert à éviter 0.
let randomNumber = Math.floor(Math.random() * 100 + 1);
let submitNumber;

function fixnum () {
    let num = $("input").val();
    function check_1 () {
        if (!Number.isInteger(num)) {
            // Si le joueur entre un nombre à virgule, il est arrondi.
            submitNumber = Math.round(num);
        } else {
            // Le nombre est entier, on passe à la seconde vérification.
            submitNumber = num;
        }
    }
    function check_2 () {
        if (submitNumber < 1) {
            // Le nombre est plus petit que la valeur minimale => il est corrigé à 1.
            submitNumber = 1;
        } else if (submitNumber > 100) {
            // Le nombre est plus grand que la valeur maximale => il est corrigé à 100.
            submitNumber = 100;
        }
    }
    check_1(); // 1ere vérification
    check_2(); // 2e vérification
}

function tip () {
    if (submitNumber == randomNumber) {
        $("ul").append(`<li>Essai n° ${guesses} : ${submitNumber} &#11834; Bonne réponse&nbsp;!</li>`);
        // La bonne réponse est donnée, il n'y a plus besoin de l'input et son bouton.
        $("input, button").remove();
    } else if (submitNumber < randomNumber) {
        $("ul").append(`<li>Essai n° ${guesses} : ${submitNumber} &#11834; Non, c'est plus&nbsp!</li>`);
    } else if (submitNumber > randomNumber) {
        $("ul").append(`<li>Essai n° ${guesses} : ${submitNumber} &#11834; Non, c'est moins&nbsp!</li>`);
    }
}

$("button").click(function () {
    guesses += 1;
    fixnum();
    tip();
    $("input").val(""); // L'input est vidé pour la chance suivante.
});
