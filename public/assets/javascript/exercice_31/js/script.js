$("button").click(function () {
    $("button").attr("disabled", false);
    $(this).attr("disabled", true);
    $("#texte").css("font-family", $(this).attr("id"));
    $("#definition").html(`La police <b>${$(this).attr("id")}</b> est utilisée.`);
});