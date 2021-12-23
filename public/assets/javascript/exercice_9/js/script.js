let textInput = document.getElementById('textInput');

textInput.addEventListener('input', 
    function(){
        if (textInput.value !== "") {
            alert(textInput.value);
        }
    }
);