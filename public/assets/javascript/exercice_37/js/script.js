$("#buttonEdit").click(function() {
    $("#texte_1, #texte_3").css("border", "5px green dashed");
    $(this).attr("disabled", true);
    $(this).html("1<sup>ere</sup> et 3<sup>e</sup> DIV MODIFIEES");
});

