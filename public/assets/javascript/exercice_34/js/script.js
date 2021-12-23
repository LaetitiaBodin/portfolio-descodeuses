$("#buttonHide").click(function() {
    $(".a_cacher").hide();
    $(this).attr("disabled", true);
    $(this).html("SELECTION CACHEE");
 });