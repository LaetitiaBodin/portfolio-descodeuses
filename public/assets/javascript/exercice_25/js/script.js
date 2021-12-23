var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var i;

var colors = {
    background : [
        {
            stop : 0,
            color : '#c6ffdd'
        },
        {
            stop : 0.5,
            color : '#fbd786'
        },
        {
            stop : 1,
            color : '#f7797d'
        }
    ],
    car_body : [
        {
            stop : 0,
            color : '#f0c27b'
        },
        {
            stop : 0.1,
            color : '#4b1248'
        }
    ],
    wheels : [
        {
            stop : 0,
            color : '#414345'
        },
        {
            stop : 1,
            color : '#232526'
        }
    ],
    wing_mirror : [
        {
            stop : 0,
            color : '#f0c27b'
        },
        {
            stop : 0.3,
            color : '#403b4a'
        }
    ]
};

function background () {
    ctx.beginPath();
    var colorBackground = ctx.createLinearGradient(0, 0, 0, 500);
    for (i = 0; i < colors.background.length ; i++) {
        colorBackground.addColorStop(colors.background[i].stop, colors.background[i].color);
    }
    ctx.fillStyle = colorBackground;
    ctx.fillRect(0, 0, 500, 500);
    ctx.closePath();
}

function car (x, y) {

    function carBody () {
        // Carfront
        ctx.beginPath();
        var colorCarFront = ctx.createLinearGradient(x, y, x, y + 150);
        for (i = 0; i < colors.car_body.length; i++) {
            colorCarFront.addColorStop(colors.car_body[i].stop, colors.car_body[i].color);
        }
        ctx.fillStyle = colorCarFront;
        ctx.fillRect(x - 150, y, 300, 150);
        ctx.closePath();
        // Carrear
        ctx.beginPath();
        var colorCarRear = ctx.createLinearGradient(x, y + 150, x, y + 300);
        for (i = 0; i < colors.car_body.length; i++) {
            colorCarRear.addColorStop(colors.car_body[i].stop, colors.car_body[i].color);
        }
        ctx.fillStyle = colorCarRear;
        ctx.fillRect(x - 200, y + 150, 400, 150);
        ctx.closePath();
    }

    function wheels () {
        ctx.beginPath();
        var colorWheels = ctx.createLinearGradient(x, y + 300, x, y + 350);
        for (i = 0; i < colors.wheels.length ; i++) {
            colorWheels.addColorStop(colors.wheels[i].stop, colors.wheels[i].color);
        }
        ctx.fillStyle = colorWheels;
        ctx.rect(x - 180, y + 300, 80, 50);
        ctx.rect(x + 100, y + 300, 80, 50);
        ctx.fill();
        ctx.closePath();
    }

    function wingMirrors () {

        // Color used for both the mirrors' borders and their gears.
        var colorMirror = ctx.createLinearGradient(x, y + 80, x, y + 130);
        for (i = 0; i < colors.wing_mirror.length ; i++) {
            colorMirror.addColorStop(colors.wing_mirror[i].stop, colors.wing_mirror[i].color);
        }
        ctx.strokeStyle = colorMirror;

        function wingMirror (side) {
            var num;
            var xPos;
            var yPos = y + 80;
            switch (side) {
                case 'left' : 
                    num = -1;
                    xPos = x - 160;
                    break;
                case 'right' :
                    num = 1;
                    xPos = x + 160;
                    break;
            }
            // Gear
            ctx.beginPath();
            ctx.lineWidth = '6';
            ctx.lineCap='round';
            ctx.moveTo(xPos - 8 * num, yPos + 10);
            ctx.lineTo(xPos - 8 * num, yPos + 30);
            ctx.stroke();
            ctx.closePath();
            // Mirror
            ctx.beginPath();
            ctx.lineWidth = '4';
            ctx.moveTo(xPos, yPos);
            ctx.quadraticCurveTo(xPos + 20 * num, yPos - 10, xPos + 40 * num, yPos);
            ctx.quadraticCurveTo(xPos + 50 * num, yPos + 20, xPos + 40 * num, yPos + 40);
            ctx.quadraticCurveTo(xPos + 20 * num, yPos + 50, xPos, yPos + 40);
            ctx.quadraticCurveTo(xPos - 10 * num, yPos + 20, xPos, yPos);
            ctx.stroke();
            ctx.closePath();
        }

        wingMirror('left');
        wingMirror('right');
    }
    
    wingMirrors();
    wheels();
    carBody();
}

background();
car(250, 150);