$(document).ready(function () {
    $("#larger, #shown, #lighter").attr("disabled", true);
    $("#square").addClass("large visible colorLight");
})

function isDisabled (id1, id2) {
    $(id1).attr("disabled", true);
    $(id2).removeAttr("disabled");
}

function isToggled (class1, class2) {
    $("#square").removeClass(class1).addClass(class2);
}

$("#larger").click(function () {
    isDisabled("#larger", "#smaller");
    isToggled("small", "large");
})

$("#smaller").click(function () {
    isDisabled("#smaller", "#larger");
    isToggled("large", "small");
})

$("#hidden").click(function () {
    isDisabled("#hidden", "#shown");
    isToggled("visible", "invisible");
})

$("#shown").click(function () {
    isDisabled("#shown", "#hidden");
    isToggled("invisible", "visible");
})

$("#lighter").click(function () {
    isDisabled("#lighter", "#darker");
    isToggled("colorDark", "colorLight");
})

$("#darker").click(function () {
    isDisabled("#darker", "#lighter");
    isToggled("colorLight", "colorDark");
})