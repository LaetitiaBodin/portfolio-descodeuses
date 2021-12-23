function isMinor() {
    let age = document.getElementById('age').value;
    if (age < 18) {
        alert(`Vous avez ${age} ans !\nVous êtes mineur !`)
    } else {
        alert(`Vous avez ${age} ans !\nVous êtes majeur !`)
    }
};