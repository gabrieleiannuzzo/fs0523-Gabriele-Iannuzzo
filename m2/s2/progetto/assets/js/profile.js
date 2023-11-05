// GESTIONE CHECKBOX
let checkbox = document.querySelectorAll('input[type="checkbox"]');
let divs = [];

for (let i = 0; i < checkbox.length; i++) {
    divs[i] = checkbox[i].nextElementSibling;

    checkbox[i].addEventListener("change", () => {
        if (divs[i].innerHTML == "") {
            divs[i].innerHTML = '<i class="bi bi-check-lg"></i>';
        } else {
            divs[i].innerHTML = "";
        }
    })
}