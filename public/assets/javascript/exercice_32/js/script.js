$("button").click(function () {
    $("button").attr("disabled", false);
    $(this).attr("disabled", true);
});

$("#buttonRed").click(function () {
    $("li").css("color", "#ff0000");
});

$("#buttonBlack").click(function () {
    $("li").css("color", "#000000");
});