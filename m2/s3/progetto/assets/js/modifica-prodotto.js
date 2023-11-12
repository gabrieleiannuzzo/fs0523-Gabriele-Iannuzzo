const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("productId");

const deleteConfirmBtn = document.getElementById("delete-confirm-btn");
const resetConfirmBtn = document.getElementById("reset-confirm-btn");
const main = document.querySelector("main");
const inputs = main.querySelectorAll("form input, form textarea");
const loader = document.getElementById("loader");

deleteConfirmBtn.addEventListener("click", () => {
    deleteProduct();
});

resetConfirmBtn.addEventListener("click", () => {
    for (let input of inputs) input.value = "";
});

showProduct();

async function deleteProduct() {
    try {
        loader.classList.remove("d-none");
        const response = await fetch(url + productId, {
            method: "DELETE",
            headers: {
                "Authorization": apiKey,
            }
        });
    
        location.href = "index.html";
    } catch (error) {
        loader.classList.add("d-none");
        messageHandle("error-message", "Si è verificato un errore nell'eliminazione del prodotto. Riprova", true);
    }
}

async function showProduct() {
    try {
        loader.classList.remove("d-none");

        const response = await fetch(url + productId, {
            headers: {
                "Authorization": apiKey,
            }
        });
        const product = await response.json();

        loader.classList.add("d-none");

        updateProduct(product);
    } catch (error) {
        messageHandle("error-message", "Si è verificato un errore nel caricamento del prodotto. Prova a ricaricare la pagina");
    }
}

function updateProduct (product) {
    const h1 = document.querySelector("h1");
    const nameInput = document.getElementById("name-input");
    const brandInput = document.getElementById("brand-input");
    const priceInput = document.getElementById("price-input");
    const imageUrlInput = document.getElementById("image-url-input");
    const descriptionInput = document.getElementById("description-input");
    const saveBtn = document.querySelector(".save-btn");

    h1.innerText = `Modifica auto: "${product.name}"`;
    nameInput.value = product.name;
    brandInput.value = product.brand;
    priceInput.value = product.price;
    imageUrlInput.value = product.imageUrl;
    descriptionInput.value = product.description;

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
            let obj = {
                name: nameInput.value,
                brand: brandInput.value,
                price: priceInput.value,
                imageUrl: imageUrlInput.value,
                description: descriptionInput.value
            }

            sendData(obj);
        }
    });
}

async function sendData (obj) {
    try {
        loader.classList.remove("d-none");
        await fetch (url + productId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": apiKey,
            },
            body: JSON.stringify(obj),
        });
        loader.classList.add("d-none");
        messageHandle("success-message", "Prodotto modificato con successo", true);
    } catch (error) {
        loader.classList.add("d-none");
        messageHandle("error-message", "Si è verificato un errore nella modifica del prodotto. Riprova", true);
    }
}