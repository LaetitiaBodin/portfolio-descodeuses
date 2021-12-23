let button = document.getElementById('buttonSH');
let text = document.getElementById('textSH');

button.addEventListener('click', 
    function () {
        if (text.style.display == 'none') {
            text.style.display = '';
            button.innerHTML = `HIDE`;
        } else {
            text.style.display = 'none';
            button.innerHTML = `SHOW`;
        }
    }
);