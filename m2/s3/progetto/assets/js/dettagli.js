const apiKey = " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMTEyZTMyNWM5NzAwMTg3ZjlmZTYiLCJpYXQiOjE2OTk2MTUwMjIsImV4cCI6MTcwMDgyNDYyMn0.R5RBuhRA3qqu2SpJbbKquMjlimyliws3H3IK9JwOFV0";
const url = "https://striveschool-api.herokuapp.com/api/product/";
const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("productId");





async function fillPage (data) {
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



class Fetch {
    constructor (url, apiKey) {
        this.url = url;
        this.apiKey = apiKey;
    }

    async fetchData (method, obj) {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": this.apiKey,
        }

        if (this.method == "GET" || this.method == "DELETE") {
            const response = await fetch (url, {
                method: method,
                headers: headers,
            });
        } else {
            const response = await fetch (url, {
                method: method,
                headers: headers,
                body: JSON.stringify(obj),
            });
        }
        
        const data = await response.json();
        console.log(data)
        return data;
    }
}

const data = new Fetch (url + productId, apiKey).fetchData("GET");
console.log(data);
fillPage(data);