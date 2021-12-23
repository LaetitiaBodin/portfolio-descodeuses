let count = 0;

$("#plusOne").click(function () {
    count++;
    $("#clickCount").html(count);
});

$("#minusOne").click(function () {
    count--;
    $("#clickCount").html(count);
});