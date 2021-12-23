$(".color").click(function () {
    $("#texte").css("color", $(this).attr("id"));
});

$("#texte").click(function () {
    // NB: Il y a une seule classe sur le texte, avec un nom de couleur.
    $($(this)).css("color", $(this).attr("class"));
});