var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var i;

var colors = {
    background : [
        {
            stop : 0,
            color : '#ffffff'
        },
        {
            stop : 0.5,
            color : '#b3ffab'
        },
        {
            stop : 1,
            color : '#12fff7'
        }

    ],
    balls: {
        ball_1 : [
            {
                stop : 0,
                color : '#f3f9a7'
            },
            {
                stop : 1,
                color : '#cac531'
            }
        ],
        ball_2 : [
            {
                stop : 0,
                color :'#ffdde1'
            },
            {
                stop : 1,
                color :'#ee9ca7'
            }
        ],
        ball_3 : [
            {
                stop : 0,
                color :'#edde5d'
            },
            {
                stop : 1,
                color : '#f09819'
            }
        ]
    },
    cone : {
        primary : [
            {
                stop : 0,
                color : '#ffd194'
            },
            {
                stop : 0.2,
                color : '#d1913c'
            }
        ],
        secondary : '#fff094'
    }
};

function background () {
    ctx.beginPath();
    var colorBackground = ctx.createRadialGradient(250, 150, 100, 250, 150, 400);
    for (i = 0; i < colors.background.length ; i++) {
        colorBackground.addColorStop(colors.background[i].stop, colors.background[i].color);
    }
    ctx.fillStyle = colorBackground;
    ctx.fillRect(0, 0, 500, 500);
    ctx.closePath();
}

function iceCream (x, y) {

    function balls () {

        // Ball 1
        ctx.beginPath();
        var colorBall_1 = ctx.createLinearGradient(0, y - 50, 0, y);
        for (i = 0; i < colors.balls.ball_1.length ; i++) {
            colorBall_1.addColorStop(colors.balls.ball_1[i].stop, colors.balls.ball_1[i].color);
        }
        ctx.fillStyle = colorBall_1;
        ctx.arc(x, y, 50, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();

        // Ball 2
        ctx.beginPath();
        var colorBall_2 = ctx.createLinearGradient(0, y, 0, y + 50);
        for (i = 0; i < colors.balls.ball_2.length ; i++) {
            colorBall_2.addColorStop(colors.balls.ball_2[i].stop, colors.balls.ball_2[i].color);
        }
        ctx.fillStyle = colorBall_2;
        ctx.arc(x - 40, y + 50, 50, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();

        // Ball 3
        ctx.beginPath();        
        var colorBall_3 = ctx.createLinearGradient(0, y, 0, y + 50);
        for (i = 0; i < colors.balls.ball_3.length ; i++) {
            colorBall_3.addColorStop(colors.balls.ball_3[i].stop, colors.balls.ball_3[i].color);
        }
        ctx.fillStyle = colorBall_3;
        ctx.arc(x + 40, y + 50, 50, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();

    }

    function cone () {

        // Biscuit
        ctx.beginPath();
        var colorCone = ctx.createLinearGradient(0, y + 60, 0, y + 286);
        for (i = 0; i < colors.cone.primary.length ; i++) {
            colorCone.addColorStop(colors.cone.primary[i].stop, colors.cone.primary[i].color);
        }
        ctx.fillStyle = colorCone;
        ctx.moveTo(x - 90, y + 60);
        ctx.lineTo(x + 90, y + 60);
        ctx.lineTo(x, y + 286);
        ctx.lineTo(x - 90, y + 60);
        ctx.fill();
        ctx.closePath();

        // Stripes
        ctx.beginPath();
        ctx.strokeStyle = colors.cone.secondary;
        var xPos = x - 10;
        var yPos = y + 260;
        var xPos2 = x + 10;
        for (i = 0; i < 10; i++) {
            ctx.moveTo(xPos, yPos);
            ctx.lineTo(xPos2, yPos);
            yPos -= 20;
            xPos -= 8;
            xPos2 += 8;
        }
        ctx.stroke();
        ctx.closePath();

    }
     
    balls();
    cone();
}

background();
iceCream(250, 150);