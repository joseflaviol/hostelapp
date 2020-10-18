const form_add_guest = document.querySelector("#form_add_guest");

validate = () => {
    let msg = "";

    if (form_add_guest.fname.value.length < 3 || form_add_guest.lname.value.length < 3) {
        msg += "Name must contains at least 3 chars.\n";
    }

    if (msg != "") {
        alert(msg);
    } else {
        window.location.href = 'guests.html'
    }
}

form_add_guest.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
});
