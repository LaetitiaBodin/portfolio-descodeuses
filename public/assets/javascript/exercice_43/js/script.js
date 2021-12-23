$("input").focusin(function () {
    $(this).css("border", "1px solid green");
});

$("input").focusout(function () {
    $(this).css("border", "1px solid red");
});