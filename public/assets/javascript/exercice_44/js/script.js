$(".color").mouseover(function () {
    $("#texte").css("color", $(this).attr("id"));
});

$("div > div").mouseout(function () {
    $("#texte").css("color", "black");
});