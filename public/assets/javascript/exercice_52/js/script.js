/* Text :
- Doit commencer par au moins une majscule sans accent,
- Peut avoir un tiret ou une espace ou une apostrophe si une majuscule sans accent suit (plusieurs fois),
- Doit se terminer par une majuscule sans accent. */
const regexText = /^[A-Z]+((\-|\s|\')?[A-Z])*[A-Z]*$/;

/* Mail :
Attention ! La règle est assez laxiste pour permettre à des adresses originales valides de ne pas être refusées.
Des règles plus dures pourraient considérer comme invalides des adresses correctes.
Le filtre sert à vérifier que l'adresse donnée respecte le format, il ne garantit pas qu'elle sera vraiment valide.

- Doit commencer par : 
                        |-- - 1 lettre (majuscule ou minuscule sans accent)
       Au moins 1 fois =|   ou 
                        |-- - 1 chiffre
- Peut ensuite avoir : 
                        |--  - 1 lettre 
                        |    ou 
                        |    - 1 chiffre 
   A partir de 0 fois ==|    ou 
                        |    1 . suivi de : 1 lettre (majuscule ou minuscule sans accent) ou 1 chiffre 
                        |    ou 
                        |--  1 + suivi de : 1 lettre (majuscule ou minuscule sans accent) ou 1 chiffre
- Doit se terminer par la chaîne @gmail.com */
const regexMail =  /^[a-z|A-Z|0-9]+([\.|\+][a-z|A-Z|0-9]+)*@gmail\.com$/;

/* Phone :
- Doit commencer par 0 suivi d'un chiffre de 1 à 7
- Doit se terminer par 4 fois 1 point suivi de 2 chiffres de 0 à 9. */
const regexPhone = /0[1-7](\.[0-9]{2}){4}/;

// Fonction utilisée pour vérifier le nom ou le prénom.
function checkTexts (targetInput, targetPara) {
    let tempval = $(targetInput).val();
    if (!regexText.test(tempval) || tempval.length < 2) {
        $(targetInput).css("border", "4px solid #dc2f02");
        $(targetPara).html("Saisie invalide.");
    } else {
        $(targetInput).css("border", "2px inset transparent");
        $(targetPara).html("");
    }
}

// Fonction utilisée pour vérifier l'email ou le numéro de téléphone.
function checkOthers (targetInput, targetPara, targetRegex) {
    let tempval = $(targetInput).val();
    if (!targetRegex.test(tempval)) {
        $(targetInput).css("border", "4px solid #dc2f02");
        $(targetPara).html("Saisie invalide.");
    } else {
        $(targetInput).css("border", "2px inset transparent");
        $(targetPara).html("");
    }
}

$("#inputSurname").focusout(function () {
    checkTexts(this, "#checkSurname");
})

$("#inputName").focusout(function () {
    checkTexts(this, "#checkName");
})

$("#inputMail").focusout(function () {
    checkOthers(this, "#checkMail", regexMail);
})

$("#inputPhone").focusout(function () {
    checkOthers(this, "#checkPhone", regexPhone);
})

// Avant d'envoyer le formulaire, une dernière vérification est faite.
$("form").submit(function () {
    let finalCheck = !regexText.test($("#inputSurname").val()) || $("#inputSurname").val().length < 2 ||
                     !regexText.test($("#inputName").val())    || $("#inputName").val().length < 2 ||
                     !regexMail.test($("#inputMail").val())    ||
                     !regexPhone.test($("#inputPhone").val());
    if (finalCheck) {
    // Le formulaire contient toujours des erreurs.
    // Il n'est pas envoyé et l'utilisateur est invité à vérifier ses saisies.
        event.preventDefault();
        alert("Des informations sont erronnées !\nMerci de les corriger.");
    } else {
        // Le formulaire ne contient plus d'erreurs.
        // Il est envoyé et l'utilisateur voit une confirmation d'envoi.
        alert("Votre message a bien été envoyé.\nNous y répondrons dans les plus brefs délais.\nA bientôt.");
    }
})