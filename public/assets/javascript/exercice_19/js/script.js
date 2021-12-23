let cities = [`LONDON`, `PARIS`, `MADRID`, `NEW YORK`, `MOSCOW`, `DUBLIN`];

function addCities () {
    for (let i = 0; i < cities.length; i++) {
        newLI = document.createElement('li');
        citiesList.appendChild(newLI);
        newLI.innerHTML = cities[i];
        newLI.className = `list-group-item px-0`;
    }
}

let addedCity = document.getElementById('addCity');

function addFirst () {
    if (addedCity.value === ``) {
        alert(`Nothing to add!`);
    } else {
        cities.unshift(addedCity.value.toUpperCase());
        citiesList.innerHTML = ``;
        addCities();
    }
}

function addLast () {
    if (addedCity.value === ``) {
        alert(`Nothing to add!`);
    } else {
    cities.push(addedCity.value.toUpperCase());
    citiesList.innerHTML = ``;
    addCities();
    }
}

function rmvFirst () {
    cities.shift();
    citiesList.innerHTML = ``;
    addCities();
}

function rmvLast () {
    cities.pop();
    citiesList.innerHTML = ``;
    addCities();
}