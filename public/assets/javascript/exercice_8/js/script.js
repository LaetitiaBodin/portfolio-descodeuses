let textInput = document.getElementById('textInput');

textInput.addEventListener('focusout', 
    function () {
        window.alert(`Merci de votre participation.`);
    }
);