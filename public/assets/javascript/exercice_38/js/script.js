$("#buttonEdit").click(function() {
    $("#texte_3").addClass("a_cacher");
    $(".a_cacher").hide();
    $(this).attr("disabled", true);
    $(this).html("1<sup>ere</sup> et 3<sup>e</sup> DIV CACHEES");
});