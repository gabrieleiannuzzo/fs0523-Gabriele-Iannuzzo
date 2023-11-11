const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMTEyZTMyNWM5NzAwMTg3ZjlmZTYiLCJpYXQiOjE2OTk2MTUwMjIsImV4cCI6MTcwMDgyNDYyMn0.R5RBuhRA3qqu2SpJbbKquMjlimyliws3H3IK9JwOFV0";
const url = "https://striveschool-api.herokuapp.com/api/product/";
const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("productId");

fillPage();

async function fillPage() {
    let response = await fetch(url + productId, {
        headers: {
            "Authorization": apiKey,
        }
    });

    let data = await response.json();

    HTMLHandle(data);
}

function HTMLHandle(data) {
    const img = document.getElementById("img");
    const title = document.getElementById("title");
    const brand = document.getElementById("brand");
    const description = document.getElementById("description");
    const price = document.getElementById("price");

    img.src = data.imageUrl;
    title.innerText = data.name;
    brand.innerText = data.brand;
    description.innerText = data.description;
    price.innerText = `${setPoints(data.price)}€`;
}