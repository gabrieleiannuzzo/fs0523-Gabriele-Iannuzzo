let apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMTEyZTMyNWM5NzAwMTg3ZjlmZTYiLCJpYXQiOjE2OTk2MTUwMjIsImV4cCI6MTcwMDgyNDYyMn0.R5RBuhRA3qqu2SpJbbKquMjlimyliws3H3IK9JwOFV0";
let url = "https://striveschool-api.herokuapp.com/api/product/";

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
        let title = this.clone.querySelector(".product-title");
        let price = this.clone.querySelector(".product-price");
        let img = this.clone.querySelector("img");
        this.clone.setAttribute("product-id", this.id);

        title.innerHTML = `${this.name} | <span>${this.brand}</span>`;
        price.innerHTML = `${this.price}€`;
        img.src = this.imgUrl;
        
        this.target.append(this.clone);
    }
}

async function getProducts () {
    let response = await fetch (url, {
        headers: {
            "Authorization": `Bearer ${apiKey}`,
        }
    });
    let products = await response.json();
    let template = document.getElementById("product-template");
    let target = document.getElementById("row");

    for (let i = 0; i < products.length; i++) {
        new Product(products[i].name, products[i].brand, setPoints(products[i].price), products[i].imageUrl, products[i]["_id"], template, target);
        // let clone = document.importNode(template.content, true).firstElementChild;
        // let title = clone.querySelector(".product-title");
        // let price = clone.querySelector(".product-price");
        // let img = clone.querySelector("img");
        // let id = products[i]["_id"];
        // clone.setAttribute("product-id", id);

        // img.src = products[i].imageUrl;
        // title.innerHTML = `${products[i].name} | <span>${products[i].brand}</span>`;
        // price.innerHTML = `${setPoints(products[i].price)}€`;

        // target.append(clone);
    }
}

getProducts();

// FUNZIONE PER INSERIRE IL PUNTO DALLE MIGLIAIA IN POI
function setPoints(number){
    if (number < 100) return number;
    let stringNumber = number.toString();
    let tempString = "";
    let arr = [];
    
    for (let i = 0; i < stringNumber.length; i++) {
        tempString += stringNumber[i];
        if ((i + 1) % 3 == 0) {
            arr.push(tempString);
            tempString = "";
        }
    }

    return arr.join(".");
}