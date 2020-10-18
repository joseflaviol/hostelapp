const form_login = document.querySelector("#form_login");

validate = () => {
    let msg = "";
    if (form_login.username.value.length < 6) {
        msg += "Username must contain at least 6 digits.\n";
    }
    if (form_login.username.value.includes(" ")) {
        msg += "Username must not contain spaces.\n";
    }
    if (form_login.password.value.length < 8) {
        msg += "Password must contain at least 8 digits\n";
    }

    if (msg != "") {
        alert(msg);
    } else {
        alert("Welcome");
    }
}

form_login.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
});
