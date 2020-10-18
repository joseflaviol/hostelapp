const form_add_guest = document.querySelector("#form_add_guest");

contains_ilegal_digit = (string) => {
    for (let i = 0; i < string.length; i++) {
        if (!(string[i] > 'a' && string[i] < 'z') && !(string[i] > 'A' && string[i] < 'Z')) {
            return true;
        }
    }

    return false;
}

validate = () => {
    let msg = "";

    if (contains_ilegal_digit(form_add_guest.fname.value) || contains_ilegal_digit(form_add_guest.lname.value)) {
        msg += "Name can't contain non literal char.\n";
    }

    if (form_add_guest.fname.value.length < 3 || form_add_guest.lname.value.length < 3) {
        msg += "Name must contains at least 3 chars.\n";
    }

    if (msg != "") {
        alert(msg);
    } else {
        alert('Created');
    }
}

form_add_guest.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
});
