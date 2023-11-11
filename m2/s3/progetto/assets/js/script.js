const apiKey = " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMTEyZTMyNWM5NzAwMTg3ZjlmZTYiLCJpYXQiOjE2OTk2MTUwMjIsImV4cCI6MTcwMDgyNDYyMn0.R5RBuhRA3qqu2SpJbbKquMjlimyliws3H3IK9JwOFV0";
const url = "https://striveschool-api.herokuapp.com/api/product/";

// CLASSE DEI PRODOTTI DELLA HOMEPAGE
class Product {
    constructor(name, brand, price, imgUrl, id, template, target){
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.imgUrl = imgUrl;
        this.id = id;
        this.template = template;
        this.clone = document.importNode(this.template.content, true).firstElementChild;
        this.target = target;
        this.HTMLInit();
    }

    HTMLInit () {
        const title = this.clone.querySelector(".product-title");
        const price = this.clone.querySelector(".product-price");
        const img = this.clone.querySelector("img");
        const detailsBtn = this.clone.querySelector(".details-btn");
        const editBtn = this.clone.querySelector(".edit-btn");
        this.clone.setAttribute("product-id", this.id);

        title.innerHTML = `${this.name} | <span>${this.brand}</span>`;
        price.innerHTML = `${this.price}€`;
        img.src = this.imgUrl;

        detailsBtn.href = `./dettagli.html?productId=${this.id}`;
        editBtn.href = `./modifica-prodotto.html?productId=${this.id}`;
        
        this.target.append(this.clone);
    }
}

async function getProducts () {
    const loader = document.getElementById("loader");
    loader.classList.remove("d-none");

    const response = await fetch (url, {
        headers: {
            "Authorization": apiKey,
        }
    });
    const products = await response.json();

    loader.classList.add("d-none");
    const template = document.getElementById("product-template");
    const target = document.getElementById("row");

    for (let i = 0; i < products.length; i++) {
        new Product(products[i].name, products[i].brand, setPoints(products[i].price), products[i].imageUrl, products[i]["_id"], template, target);
    }
}

getProducts();