let squareRGB = {
    red: 120,
    green: 120,
    blue: 120
};
  
let squareStyle = {
    top: 200,
    left: window.innerWidth / 2 - 100,
    backgroundColor: `rgb(${squareRGB.red}, ${squareRGB.green}, ${squareRGB.blue})`
};
    
$(document).ready(function () {
    $("#divSquare").css(squareStyle);
    $("#inputOFF").focus();
});

// Function used to make the square move and change color.
$("#inputON").keydown(function () {
    // The square values are edited depending on the key pressed.
    if (event.which == 38 && squareStyle.top > 100 && squareStyle.top <= 300) {
        squareStyle.top--;
        squareRGB.green--;
    } else if (event.which == 39 && squareStyle.left >= window.innerWidth / 2 - 200 && squareStyle.left < window.innerWidth / 2) {
        squareStyle.left++;
        squareRGB.blue++;
    } else  if (event.which == 40 && squareStyle.top >= 100 && squareStyle.top < 300) {
        squareStyle.top++;
        squareRGB.green++;
    }else if (event.which == 37 && squareStyle.left > window.innerWidth / 2 - 200 && squareStyle.left <= window.innerWidth / 2) {
        squareStyle.left--;
        squareRGB.blue--;
    }
    // The square's styles are updated: its position and color change.
    $("#divSquare").css({
        top: squareStyle.top,
        left: squareStyle.left, 
        backgroundColor: `rgb(${squareRGB.red}, ${squareRGB.green}, ${squareRGB.blue})`
    });
});
  
// Functions used with the css stylesheet to make the inputs look like a button.
// The inputs will switch places when these events are triggered.

$("#inputOFF").focusin(function () {
    $("#inputOFF").css("z-index", "1");
    $("#inputON").css("z-index", "2");
});
  
$("#inputON").focusin(function () {
    $("#inputON").css("z-index", "1");
    $("#inputOFF").css("z-index", "2");
});
  
$("#inputON").focusout(function () {
    $("#inputOFF").css("z-index", "1");
    $("#inputON").css("z-index", "2");
});