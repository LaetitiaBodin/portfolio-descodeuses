$("#buttonRemove").click(function() {
    $(".a_supprimer").remove();
    $(this).attr("disabled", true);
    $(this).html("SELECTION SUPPRIMEE");
 });