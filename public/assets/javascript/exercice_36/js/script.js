$("#buttonEditUL").click(function() {
    $("ul").children("li").css({"color": "green", "font-weight": "bolder"});
    $(this).attr("disabled", true);
    $(this).html("1<sup>ère</sup> LISTE MODIFIEE");
});

$("#buttonEditOL").click(function() {
    $("ol > li").css({"color": "red", "font-weight": "bold"});
    $(this).attr("disabled", true);
    $(this).html("2<sup>e</sup> LISTE MODIFIEE");
});