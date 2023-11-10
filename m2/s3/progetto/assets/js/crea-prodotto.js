let apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMTEyZTMyNWM5NzAwMTg3ZjlmZTYiLCJpYXQiOjE2OTk2MTUwMjIsImV4cCI6MTcwMDgyNDYyMn0.R5RBuhRA3qqu2SpJbbKquMjlimyliws3H3IK9JwOFV";
let url = "https://striveschool-api.herokuapp.com/api/product/";

let main = document.querySelector("main");
let inputs = main.querySelectorAll("form input, form textarea");
let resetConfirmBtn = document.getElementById("reset-confirm-btn");
let saveBtn = document.getElementById("save-btn");

resetConfirmBtn.addEventListener("click", () => {
    for (let input of inputs) input.value = "";
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

        let product = {
            name: nameInput.value,
            brand: brandInput.value,
            price: priceInput.value,
            imageUrl: imageUrlInput.value,
            description: descriptionInput.value
        }

        try {
            createProduct();
        } catch (error) {

        }

        async function createProduct () {
            let loader = document.getElementById("loader");
            loader.classList.remove("d-none");

            try {
                await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify(product),
                });
    
                loader.classList.add("d-none");
    
                let message = 'Prodotto creato con successo. Controlla la <a href="index.html" class="text-white">Pagina Prodotti</a>'
                elementsHandle("success-message", message);
            } catch (error) {
                let message = `Errore: ${error}`;
                elementsHandle("error-message", message)
            }
        }
    }
});

function elementsHandle (c, message) {
    inputs.forEach(input => input.value = "");
    let messageAlert = document.querySelector(".my-alert");

    messageAlert.innerHTML = message;
    messageAlert.classList.remove("d-none");
    messageAlert.classList.add(c);
    setTimeout(() => {
        messageAlert.classList.add("d-none");
        messageAlert.classList.remove(c);
    }, 3000);
}