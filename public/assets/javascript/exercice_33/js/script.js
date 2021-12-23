let buttons = document.querySelectorAll(`button`);

// La boucle commence à 1, il faut donc rajouter 1 à la longueur de 'buttons' pour suivre le décalage.
for (let i = 1; i < buttons.length + 1; i ++) {
    $(`#rmvDiv${i}`).click(function() {
        $(`#texte_${i}`).empty();
        $(this).attr(`disabled`, true);
    });
}