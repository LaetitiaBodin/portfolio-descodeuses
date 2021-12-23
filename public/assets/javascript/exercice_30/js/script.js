$("#button").click(function() {
    if ($("#texte").attr("hidden")){
        $("#texte").removeAttr("hidden");
        $("#definition").html("L'attribut <b>hidden</b> n'est pas utilisé.") ;
    } else {
        $("#texte").attr("hidden", "hidden");
        $("#definition").html("L'attribut <b>hidden</b> est utilisé.") ;
    }
});