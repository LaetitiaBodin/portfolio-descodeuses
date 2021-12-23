var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var i;

var colors = {
    background: '#000030',
    stars: '#ffeb99',
    planet: [
        {
            stop: 0,
            color: '#0cebeb'
        },
        {
            stop: 0.3,
            color: '#20e3b2'
        },
        {
            stop: 0.8,
            color: '#29ffc6'
        }
    ],
    saucer: {
        primary: [
            {
                stop: 0,
                color: '#ebebe0'
            },
            {
                stop: 1,
                color: '#f5f5f0'
            }
        ],
        secondary: [
            {
                stop: 0,
                color: '#94716b'
            },
            {
                stop: 0.9,
                color: '#b79891'
            }
        ]
    }
};

function background () {

    function space () {
        ctx.beginPath();
        ctx.fillStyle = colors.background;
        ctx.fillRect(0, 0, 500, 500);
        ctx.closePath();
    }

    function stars () {   
        for (i = 0; i < 800; i++) {
            ctx.beginPath();
            ctx.fillStyle = colors.stars;
            var randomX = Math.floor(Math.random() * 501);
            var randomY = Math.floor(Math.random() * 501);
            ctx.arc(randomX, randomY, 1, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.closePath();
        }
    }

    space();
    stars();
    
}

function planet (x, y) {
    ctx.beginPath();
    var colorPlanet = ctx.createLinearGradient(x, y - 50, x, y + 50);
    for (i = 0; i < colors.planet.length ; i++) {
        colorPlanet.addColorStop(colors.planet[i].stop, colors.planet[i].color);
    }
    ctx.fillStyle = colorPlanet;
    ctx.arc(x, y, 50, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();
}

function saucer (x, y) {
    ctx.beginPath();
    var colorSaucerSec = ctx.createLinearGradient(x, y - 15, x, y + 35);
    for (i = 0; i < colors.saucer.secondary.length ; i++) {
        colorSaucerSec.addColorStop(colors.saucer.secondary[i].stop, colors.saucer.secondary[i].color);
    }
    ctx.fillStyle = colorSaucerSec; 
    ctx.ellipse(x, y + 20, 70, 200, 45 * Math.PI/30, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    var colorSaucerPrim = ctx.createLinearGradient(x, y - 25, x, y + 25);
    for (i = 0; i < colors.saucer.secondary.length ; i++) {
        colorSaucerPrim.addColorStop(colors.saucer.primary[i].stop, colors.saucer.primary[i].color);
    }
    ctx.fillStyle = colorSaucerPrim; 
    ctx.ellipse(x, y, 50, 160, 45 * Math.PI/30, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

background();
planet(150, 100);
saucer(250, 250);