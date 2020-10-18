const hostel = new Hostel();
hostel.request_guests();

const div_guests = document.querySelector("#guests");
const div_showing = document.querySelector("#showing");
const form_search = document.querySelector("#form_search");
const sort_opt = document.querySelector("#sort_opt");
const btn_previous = document.querySelector("#btn_previous");
const btn_next = document.querySelector("#btn_next");
const btn_sort = document.querySelector("#btn_sort");

let number_of_guests;
let initial_range;
let final_range;

set_range_vars = () => {
    number_of_guests = hostel.get_number_of_guests();
    initial_range = 0;
    final_range = number_of_guests >= 10 ? 10 : number_of_guests;
}

show_guests = (initial_range, final_range) => {
    const guests = hostel.get_guests(initial_range, final_range);

    div_guests.innerHTML = "";

    guests.forEach((item, i) => {
        div_guests.innerHTML += ` <div>${item.id}</div>
                                  <div>${item.phoneNumber}</div>
                                  <div>${item.firstName}</div>
                                  <div>${item.lastName}</div>
                                  <div>${item.emailAddress}</div>`;
    });

    if (form_search.search.value == "") {
        div_showing.innerHTML = `Showing ${initial_range + 1} to ${final_range} of ${number_of_guests} guests.`;
    }
}

search = () => {
    if (hostel.search(form_search.search.value)) {
        div_showing.innerHTML = `Showing ${initial_range + 1} to ${final_range} of ${number_of_guests} results for: ${form_search.search.value}`;
    } else {
        alert("No results");
    }

    set_range_vars();
    show_guests(initial_range, final_range);
    update_buttons();
}

sort = () => {
    hostel.sort(sort_opt.value);

    set_range_vars();
    show_guests(initial_range, final_range);
    update_buttons();
}

previous_page = () => {
    final_range = initial_range;
    initial_range = initial_range - 10 > 0 ? initial_range - 10 : 0;
    show_guests(initial_range, final_range);
    update_buttons();
}

next_page = () => {
    initial_range = final_range;
    final_range = number_of_guests - final_range >= 10 ? final_range + 10 : number_of_guests;
    show_guests(initial_range, final_range);
    update_buttons();
}

update_buttons = () => {
    if (initial_range == 0) {
        btn_previous.classList.add('disabled');
        btn_previous.disabled = true;
    } else {
        btn_previous.classList.remove('disabled');
        btn_previous.disabled = false;
    }

    if (final_range == number_of_guests) {
        btn_next.classList.add('disabled');
        btn_next.disabled = true;
    } else {
        btn_next.classList.remove('disabled');
        btn_next.disabled = false;
    }
}

set_range_vars();
show_guests(initial_range, final_range);
update_buttons();

form_search.addEventListener('submit', (e) => {
    e.preventDefault();
    search();
});
btn_sort.addEventListener('click', sort);
btn_previous.addEventListener('click', previous_page);
btn_next.addEventListener('click', next_page);
