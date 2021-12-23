$("#button").click(function () {
    $("#texte").toggle("slow");
    if (this.innerHTML == "CACHER") {
        this.innerHTML = "AFFICHER";
    } else {
        this.innerHTML = "CACHER";
    };
});