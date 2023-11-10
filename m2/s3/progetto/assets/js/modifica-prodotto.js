const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMTEyZTMyNWM5NzAwMTg3ZjlmZTYiLCJpYXQiOjE2OTk2MTUwMjIsImV4cCI6MTcwMDgyNDYyMn0.R5RBuhRA3qqu2SpJbbKquMjlimyliws3H3IK9JwOFV0";
const url = "https://striveschool-api.herokuapp.com/api/product/";
const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("productId");

const deleteConfirmBtn = document.getElementById("delete-confirm-btn");
const resetConfirmBtn = document.getElementById("reset-confirm-btn");
const main = document.querySelector("main");
const inputs = main.querySelectorAll("form input, form textarea");

deleteConfirmBtn.addEventListener("click", () => {
    deleteProduct();
});

resetConfirmBtn.addEventListener("click", () => {
    for (let input of inputs) input.value = "";
});

product();

async function deleteProduct () {
    const response = await fetch(url + productId, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
        }
    });

    location.href = "index.html";
}

async function product () {
    const loader = document.getElementById("loader");
    loader.classList.remove("d-none");

    const response = await fetch(url + productId, {
        headers: {
            "Authorization": `Bearer ${apiKey}`,
        }
    });
    const product = await response.json();
    
    loader.classList.add("d-none");

    const h1 = document.querySelector("h1");
    const nameInput = document.getElementById("name-input");
    const brandInput = document.getElementById("brand-input");
    const priceInput = document.getElementById("price-input");
    const imageUrlInput = document.getElementById("image-url-input");
    const descriptionInput = document.getElementById("description-input");

    h1.innerText = `Modifica prodotto: ${product.name}`;
    nameInput.value = product.name;
    brandInput.value = product.brand;
    priceInput.value = product.price;
    imageUrlInput.value = product.imageUrl;
    descriptionInput.value = product.description;
}