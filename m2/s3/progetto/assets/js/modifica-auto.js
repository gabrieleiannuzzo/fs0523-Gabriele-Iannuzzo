const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("productId");

const deleteConfirmBtn = document.getElementById("delete-confirm-btn");
const resetConfirmBtn = document.getElementById("reset-confirm-btn");
const inputs = document.querySelectorAll("main form input, main form textarea");
const loader = document.getElementById("loader");

deleteConfirmBtn.addEventListener("click", () => {
    deleteCar();
});

resetConfirmBtn.addEventListener("click", () => {
    inputs.forEach(input => input.value = "");
});

showCar();

async function deleteCar() {
    try {
        loader.classList.remove("d-none");

        await new DataLoader(url + productId, apiKey, "DELETE").fetchData();
    
        location.href = "./index.html";
    } catch (error) {
        loader.classList.add("d-none");
        messageHandle("error-message", "Si è verificato un errore nell'eliminazione dell'auto. Riprova", true);
    }
}

async function showCar() {
    try {
        loader.classList.remove("d-none");

        const car = await new DataLoader(url + productId, apiKey).fetchData();

        loader.classList.add("d-none");

        updateCar(car);
    } catch (error) {
        messageHandle("error-message", "Si è verificato un errore nel caricamento dei dati dell'auto. Prova a ricaricare la pagina");
    }
}

function updateCar (car) {
    const h1 = document.querySelector("h1");
    const nameInput = document.getElementById("name-input");
    const brandInput = document.getElementById("brand-input");
    const priceInput = document.getElementById("price-input");
    const imageUrlInput = document.getElementById("image-url-input");
    const descriptionInput = document.getElementById("description-input");
    const saveBtn = document.querySelector(".save-btn");

    h1.innerText = `Modifica auto: "${car.name}"`;
    nameInput.value = car.name;
    brandInput.value = car.brand;
    priceInput.value = car.price;
    imageUrlInput.value = car.imageUrl;
    descriptionInput.value = car.description;

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
                });
            }
        }

        if (formValid) {
            const car = {
                name: nameInput.value,
                brand: brandInput.value,
                price: priceInput.value,
                imageUrl: imageUrlInput.value,
                description: descriptionInput.value
            }

            sendData(car);
        }
    });
}

async function sendData (car) {
    try {
        loader.classList.remove("d-none");

        await new DataLoader(url + productId, apiKey, "PUT", car).fetchData();

        loader.classList.add("d-none");
        messageHandle("success-message", "Auto modificata con successo", true);
    } catch (error) {
        loader.classList.add("d-none");
        messageHandle("error-message", "Si è verificato un errore nella modifica dell'auto. Riprova", true);
    }
}