const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("productId");

const img = document.getElementById("img");
const title = document.getElementById("title");
const brand = document.getElementById("brand");
const description = document.getElementById("description");
const price = document.getElementById("price");

fillPage();

async function fillPage () {
    const response = await fetch(url + productId, {
        headers: {
            "Authorization": `Bearer ${apiKey}`,
        }
    });
    const product = await response.json();

    img.src = product.imageUrl;
    title.innerText = product.name;
    brand.innerText = product.brand;
    description.innerText = product.description;
    price.innerText = `${setPoints(product.price)}€`;
}

class Fetch {
    constructor (url, apiKey, method, obj) {
        this.url = url;
        this.apiKey = apiKey;
        this.method = method;
    }

    async productsFetch (action) {
        if (this.method == "GET" || this.method == "DELETE") {
            const response = await fetch (url, {
                method: this.method,
                headers: {
                    "Authorization": this.apiKey,
                }
            });

            const product = response.json();
        } else {
            let response = await fetch (url, {
                method: this.method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.apiKey,
                },
                body: JSON.stringify(obj),
            });
        }

        action();
    }
}