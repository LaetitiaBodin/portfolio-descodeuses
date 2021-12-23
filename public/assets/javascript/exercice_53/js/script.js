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

/* BirthPlace
- Peut avoir de 2 à 3 caractères
    S'il y en a 2 :
        - Peut être :
            - un nombre compris entre 01 et 19
            ou 
            - 2A ou 2B
            ou
            - un nombre compris entre 21 et 95
    S'il y en a 3 :
        - Peut être :
            - un nombre compris entre 971 et 978
            ou
            - un nombre compris entre 984 et 989

*/
const regexBirthPlace = /^0[0-9]$|^[1|3-8][0-9]$|^2[A-B|1-9]$|^9[0-5]$|^97[1-8]$|^98[4-9]$/;

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

// Fonction utilisée pour vérifier l'email, le numéro de téléphone et le département de naissance.
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

/* Attention !
Cette fonction ne vérifie pas la validité de la date fournie (déjà vérifiée via le navigateur).
Elle vérifie que l'année donnée est plausible.
Ici, l'utilisateur doit être né entre le 1er janvier 1900 et le 31 décembre 2006.*/
$("#inputBirthDate").focusout(function () {
    // On récupère la date de naissance, au format yyyy-mm-dd.
    let valueBirthDate = $("#inputBirthDate").val();
    // On découpe cette valeur pour avoir un tableau où [0] = yyyy, [1] = mm, [2] = dd. 
    let splitBirthDate = valueBirthDate.split("-");
    // On compare la valeur de [0] à l'intervalle que l'on a choisi. Ici : de 1900 à 2006.
    if (splitBirthDate[0] < 1900 || splitBirthDate[0] > 2006) {
        $(this).css("border", "4px solid #dc2f02");
        $("#checkBirthDate").html("Saisie invalide.");
    } else {
        $(this).css("border", "2px inset transparent");
        $("#checkBirthDate").html("");
    }
})

$("#inputBirthPlace").focusout(function () {
    checkOthers(this, "#checkBirthPlace", regexBirthPlace);
})

$("#inputCompany").focusout(function () {
    checkTexts(this, "#checkCompany");
})

$("#inputJob").focusout(function () {
    checkTexts(this, "#checkJob");
})

// Avant d'envoyer le formulaire, une dernière vérification est faite.
$("form").submit(function () {
    let valueBirthDate = $("#inputBirthDate").val();
    let splitBirthDate = valueBirthDate.split("-");
    let finalCheck = !regexText.test($("#inputSurname").val())            || $("#inputSurname").val().length < 2  ||
                     !regexText.test($("#inputName").val())               || $("#inputName").val().length < 2  ||
                     !regexMail.test($("#inputMail").val())               ||
                     !regexPhone.test($("#inputPhone").val())             ||
                     splitBirthDate[0] < 1900 || splitBirthDate[0] > 2006 ||
                     !regexBirthPlace.test($("#inputBirthPlace").val())   ||
                     !regexText.test($("#inputCompany").val())            ||
                     !regexText.test($("#inputJob").val());
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