let inputs = document.querySelectorAll("main form input, main form textarea");
let resetConfirmBtn = document.getElementById("reset-confirm-btn");
let saveBtn = document.getElementById("save-btn");

resetConfirmBtn.addEventListener("click", () => {
    inputs.forEach(input => input.value = "");
});

saveBtn.addEventListener("click", () => {
    let formValid = true;

    for (let input of inputs) {
        if (!input.value) {
            input.classList.add("red");
            input.previousElementSibling.classList.add("red");
            formValid = false;
            input.addEventListener("click", () => {
                input.classList.remove("red");
                input.previousElementSibling.classList.remove("red");
            })
        }
    }

    if (formValid) {
        let nameInput = document.getElementById("name-input");
        let brandInput = document.getElementById("brand-input");
        let priceInput = document.getElementById("price-input");
        let imageUrlInput = document.getElementById("image-url-input");
        let descriptionInput = document.getElementById("description-input");

        let car = {
            name: nameInput.value,
            brand: brandInput.value,
            price: priceInput.value,
            imageUrl: imageUrlInput.value,
            description: descriptionInput.value
        }

        createCar(car);
    }
});

async function createCar (car) {    
    try {
        let loader = document.getElementById("loader");
        loader.classList.remove("d-none");

        await new DataLoader(url, apiKey, "POST", car).fetchData();

        loader.classList.add("d-none");
        inputs.forEach(input => input.value = "");
        
        messageHandle("success-message", "Auto inserita con successo", true);
    } catch (error) {
        loader.classList.add("d-none");
        messageHandle("error-message", "Si è verificato un errore nell'inserimento dell'auto. Riprova", true);
    }
}