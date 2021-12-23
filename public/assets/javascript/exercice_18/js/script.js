let cities = [`London`, `Paris`, `Madrid`, `New York`, `Moscow`, `Dublin`];

function showList () {
    if (listSH.style.display == 'none') {
        listSH.style.display = '';
        buttonSH.innerHTML = `Hide the list!`;
    } else {
        listSH.style.display = 'none';
        buttonSH.innerHTML = `Show the list!`;
    }
}

function addList () {
    dynamicDiv.innerHTML = 
    `<button id="buttonSH" onclick="showList();" class="btn btn-info shadow-none font-weight-bold">Show the list!</button>
    <p style="display: none" id="listSH" class="h5 mt-5">${cities}</p>`;
}
