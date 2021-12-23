var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var i;

var colors = {
    background: '#8FBC8F50',
    biscuit: [
        {
            color:'#CD853F',
            stop: 0
        },
        {
            color: '#8B4513',
            stop: 0.9
        }
    ],
    eyebrows: '#264653',
    eyeballs: '#fefae0',
    mouth: '#e63946',
    button: [
        {
            color: '#cc99ff',
            stop: 0
        },
        {
            color:'#cc66ff',
            stop: 1
        }
    ],
    borders: '#faedcd',
};

function background () {
    ctx.beginPath();
    ctx.fillStyle = colors.background;
    for (i = 0; i < 5; i++) {
        ctx.fillRect(25 + 100 * i, 0, 50, 500);
        ctx.fillRect(0, 25 + 100 * i, 500, 50);
    }
    ctx.closePath();
}

function biscuit (x, y) {
    ctx.beginPath();
    var colorBiscuit = ctx.createRadialGradient(x, y + 400 / 2, 1, x, y + 400 / 2, 200);
    for (i = 0; i < colors.biscuit.length ; i++) {
        colorBiscuit.addColorStop(colors.biscuit[i].stop, colors.biscuit[i].color);
    }
    ctx.fillStyle = colorBiscuit;
    ctx.moveTo(x - 10, y + 100);
    ctx.bezierCurveTo(x - 80, y+90, x - 80, y, x, y);
    ctx.bezierCurveTo(x + 80, y, x + 80, y+90, x + 10, y + 100);
    ctx.lineTo(x + 150, y + 100);
    ctx.bezierCurveTo(x + 170, y + 100, x + 170, y + 140, x + 150, y + 140);
    ctx.lineTo(x + 40, y + 140);
    ctx.lineTo(x + 40, y + 240);
    ctx.lineTo(x + 80, y + 400);
    ctx.bezierCurveTo(x + 80, y + 420, x + 20, y + 420, x + 20, y + 400);
    ctx.lineTo(x, y + 280);
    ctx.lineTo(x - 20, y + 400);
    ctx.bezierCurveTo(x - 20, y + 420, x - 80, y + 420, x - 80, y + 400);
    ctx.lineTo(x - 40, y + 240);
    ctx.lineTo(x - 40, y + 140);
    ctx.lineTo(x - 150, y + 140);
    ctx.bezierCurveTo(x - 170, y + 140, x - 170, y + 100, x - 150, y + 100);
    ctx.lineTo(x - 10, y + 100);
    ctx.fill();
    ctx.closePath();

    function eyes () {
        function eye(side) {
            var num;
            switch(side) {
                case 'left':
                    num = -1;
                    break;
                case 'right':
                    num = 1;
                    break;
            }
            // Eyebrow
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.strokeStyle = colors.eyebrows;
            ctx.lineCap = "round";
            ctx.moveTo(x + 15 * num, y + 25);
            ctx.quadraticCurveTo(x + 25 * num, y + 20, x + 35 * num, y + 25);
            ctx.stroke();
            ctx.closePath();
            // Eyeball
            ctx.beginPath();
            ctx.fillStyle = colors.eyeballs;
            ctx.arc(x + 25 * num, y + 40, 10, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        }
        eye('left');
        eye('right');
    }

    function mouth() {
        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.strokeStyle = colors.mouth;
        ctx.moveTo(x - 15, y + 75);
        ctx.bezierCurveTo(x - 15, y + 60, x + 15, y + 60, x + 15, y + 75);
        ctx.bezierCurveTo(x + 15, y + 90, x - 15, y + 90, x - 15, y + 75);
        ctx.stroke();
        ctx.closePath();
    }

    function button (x, y) {
        ctx.beginPath();
        var colorButton = ctx.createRadialGradient(x, y, 1, x, y, 14);
        for (i = 0; i < colors.biscuit.length ; i++) {
            colorButton.addColorStop(colors.button[i].stop, colors.button[i].color);
        }
        ctx.fillStyle = colorButton;
        ctx.arc(x, y, 14, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    function wrists () {
        var xPos;
        var yPos;
        ctx.lineWidth = 6;
        ctx.lineCap = "round";
        ctx.strokeStyle = colors.borders;

        function wristLeft () {
            ctx.beginPath();
            xPos = x - 130;
            yPos = y + 110;
            ctx.moveTo(xPos, yPos - 5);
            for (i = 0; i < 3; i ++) {
                if (i % 2 == 0) {
                    ctx.arc(xPos, yPos, 5, 1.5 * Math.PI, 0.5 * Math.PI, false);
                } else if (i % 2 == 1) {
                    ctx.arc(xPos, yPos, 5, 1.5 * Math.PI, 0.5 * Math.PI, true);
                }
                yPos += 10;
            }
            ctx.stroke();
            ctx.closePath();
        }

        function wristRight () {
            ctx.beginPath();
            xPos = x + 130;
            yPos = y + 110;
            ctx.moveTo(xPos, yPos - 5);
            for (i = 0; i < 3; i ++) {
                if (i % 2 == 0) {
                    ctx.arc(xPos, yPos, 5, 1.5 * Math.PI, 0.5 * Math.PI, true);
                } else if (i % 2 == 1) {
                    ctx.arc(xPos, yPos, 5, 1.5 * Math.PI, 0.5 * Math.PI, false);
                }
                yPos += 10;
            }
            ctx.stroke();
            ctx.closePath();
        }
        wristLeft();
        wristRight();
    }

    function waist () {
        var xPos = x - 30;
        var yPos = y + 240;
        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.lineCap = "round";
        ctx.strokeStyle = colors.borders;
        ctx.moveTo(x - 35, y + 240);
        for (i = 0; i < 7; i ++) {
            if (i % 2 == 0) {
                ctx.arc(xPos, yPos, 5, Math.PI, 0, false);
            } else if (i % 2 == 1) {
                ctx.arc(xPos, yPos, 5, Math.PI, 0, true);
            }
            xPos += 10;
        }
        ctx.stroke();
        ctx.closePath();
    }

    function ankles () {
        var xPos;
        var yPos = y + 380;
        ctx.lineWidth = 6;
        ctx.lineCap = "round";
        ctx.strokeStyle = colors.borders;

        function ankleLeft () {
            ctx.beginPath();
            xPos = x - 65;
            ctx.moveTo(xPos - 5, yPos);
            for (i = 0; i < 5; i ++) {
                if (i % 2 == 0) {
                    ctx.arc(xPos, yPos, 5, Math.PI, 0, false);
                } else if (i % 2 == 1) {
                    ctx.arc(xPos, yPos, 5, Math.PI, 0, true);
                }
                xPos += 10;
            }
            ctx.stroke();
            ctx.closePath();
        }

        function ankleRight () {
            ctx.beginPath();
            xPos = x + 65;
            ctx.moveTo(xPos + 5, yPos);
            for (i = 0; i < 5; i ++) {
                if (i % 2 == 0) {
                    ctx.arc(xPos, yPos, 5, 0, Math.PI, true);
                } else if (i % 2 == 1) {
                    ctx.arc(xPos, yPos, 5, 0, Math.PI, false);
                }
                xPos -= 10;
            }
            ctx.stroke();
            ctx.closePath();
        }

        ankleLeft();
        ankleRight();
    }

    eyes();
    mouth();
    button(x, y + 140);
    button(x, y + 190);
    wrists();
    waist();
    ankles();
}
background();
biscuit(250, 50);