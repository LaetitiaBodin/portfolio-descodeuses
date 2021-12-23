let cities = [`Mexico`,`London`, `Paris`, `Madrid`, `New York`, `Moscow`, `Dublin`];

function addList () {
    for (let i = 0; i < cities.length; i++) {
        newP = document.createElement('p');
        dynamicDiv.appendChild(newP);
        newP.textContent = `City n° ${i + 1} : ${cities[i]} (index ${i})`;
        newP.className = "h4 my-3";
    }
}