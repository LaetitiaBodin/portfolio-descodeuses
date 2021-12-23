let passwordSubmit = document.getElementById(`pwdSub`);
let passwordConfirm = document.getElementById(`pwdConf`);
let match =  document.getElementById(`match`);

function togglePassword(arg1, arg2) {
    if (arg1.type === `password`) {
        arg1.type = `text`;
        arg2.src = `img/eye-solid.svg`;
    } else {
        arg1.type = `password`;
        arg2.src = `img/eye-slash-solid.svg`;
    }
}

function checkPassword() {
    if (passwordConfirm.value === `` || passwordSubmit.value === ``) {
        passwordSubmit.className = "";
        passwordConfirm.className = "";
        match.innerHTML = `&nbsp;`;
        alert(`Please fill in both fields.`);
    } else {
        if (passwordConfirm.value === passwordSubmit.value) {
            passwordSubmit.className = "border border-success";
            passwordConfirm.className = "border border-success";
            match.innerHTML = `Match!`;
        } else {
            passwordSubmit.className = "border border-danger";
            passwordConfirm.className = "border border-danger";
            match.innerHTML = `Mismatch!`;
        }
    }
};