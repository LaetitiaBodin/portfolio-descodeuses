var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var i;

var colors = {
    background: [
        {
            stop: 0,
            color: '#373b44'
        },
        {
            stop: 1,
            color: '#4286f4'
        }
    ],
    ground: '#a9a9a9',
    bushes: [
        {
            stop: 0,
            color: '#24692a'
        },
        {
            stop: 0.5,
            color: '#247f2a'
        },
        {
            stop: 1,
            color: '#24692a'
        },
    ],
    roof: '#a52a2a',
    wall: '#deb887',
    windows: {
        fill: '#a0522d',
        stroke: '#82522d'
    },
    door: '#82522d',
    doorknob:'#fff8dc'

};

// Background
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

function ground () {
    ctx.beginPath();
    ctx.fillStyle = colors.ground;
    ctx.fillRect(0, 420, 500, 80);
    ctx.closePath();
}

function bushes () {
    ctx.beginPath();
    var colorBushes = ctx.createLinearGradient(0, 300, 0, 420);
    for (i = 0; i < colors.bushes.length ; i++) {
        colorBushes.addColorStop(colors.bushes[i].stop, colors.bushes[i].color);
    }
    ctx.fillStyle = colorBushes;
    ctx.fillRect(0, 300, 500, 120);
    ctx.closePath();
}

function house (x, y) {

    function roof () {
    ctx.beginPath();
    ctx.fillStyle = colors.roof;
    ctx.moveTo(x - 100, y);
    ctx.lineTo(x + 100, y);
    ctx.lineTo(x + 150, y + 100);
    ctx.lineTo(x - 150, y + 100);
    ctx.lineTo(x - 100, y);           
    ctx.fill();    
    ctx.closePath();
    }

    function wall () {
        ctx.beginPath();
        ctx.fillStyle = colors.wall;
        ctx.fillRect(x - 100, y + 100, 200, 200);
        ctx.closePath();
    }

    function windows () {
        ctx.beginPath();
        ctx.fillStyle = colors.windows.fill;
        ctx.strokeStyle = colors.windows.stroke;
        var xPos = x - 80;
        for (var i = 0; i < 3; i++) {
            ctx.fillRect(xPos, y + 130, 40, 60);
            ctx.moveTo(xPos + 20, y + 130);
            ctx.lineTo(xPos + 20, y + 190);
            ctx.stroke();
            xPos += 60;
        }
        ctx.closePath();
    }

    function door () {
        // Door
        ctx.beginPath();
        ctx.fillStyle = colors.door;
        ctx.fillRect(x - 20, y + 220, 40, 80);
        ctx.closePath();
        // Knob
        ctx.beginPath();
        ctx.fillStyle = colors.doorknob;
        ctx.fillRect(x + 10, y + 260, 4, 14);
        ctx.closePath();
    }

    roof();
    wall();
    windows();
    door();
    
}

background();
ground();
bushes();
house(250, 120);