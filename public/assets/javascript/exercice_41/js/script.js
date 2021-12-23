$(document).ready(function () {
    $("#afficher").hide();
})

$("#afficher").click(function () {
    $("a, #texte").show();
    $(this).hide();
});

$("#cacher").click(function () {
    $("a").show();
    $("#texte").hide();
    $(this).hide();
});