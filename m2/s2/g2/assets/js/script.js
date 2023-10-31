let buttons = document.querySelectorAll(".bottone");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.innerText == "Nascondi sezione") {
            button.innerText = "Mostra sezione";
            button.parentElement.nextElementSibling.classList.add("hidden");
        } else {
            button.innerText = "Nascondi sezione";
            button.parentElement.nextElementSibling.classList.remove("hidden");
        }
    })
})