let goodColors = [`blue`, `red`, `white`];

function check () {
    let valColorUJ = document.getElementById('colorUJ').value.toLowerCase();
    if (valColorUJ === goodColors[0] || valColorUJ === goodColors[1] || valColorUJ === goodColors[2]) {
        correction.innerHTML = `Good answer!`;
    } else {
        correction.innerHTML = `Bad answer!`;
    }
}

function retry () {
    document.getElementById('colorUJ').value = ``;
    correction.innerHTML = ``;
}