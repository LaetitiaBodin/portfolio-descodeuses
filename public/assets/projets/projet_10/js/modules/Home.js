export function home () {
    $('body').append(
        `<div id="home">
            <h1>aliens </h1>
            <p id="rules">
                Leela et Leelo veulent tous les deux participer à la prochaine aventure intergalactique de leurs cousins.<br>
                Mais il ne reste de la place que pour un seul dans le vaisseau... Comment choisir&nbsp;?<br>
                Ils ont une idée&nbsp;: laisser une tierce personne décider leurs traits de caractères qui vont faire la différence et ainsi désigner qui va gagner sa place.</p>
            <button id="btn-start">COMMENCER UNE PARTIE</button>
        </div>`
    );
}

export function gameStart () {
    $('#btn-start').click(function () {
        $("#playground").removeClass("hidden");
        $('#home').remove();
    })
}