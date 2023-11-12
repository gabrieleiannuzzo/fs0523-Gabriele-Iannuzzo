// CLASSE DEI PRODOTTI DELLA HOMEPAGE
class Car {
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
        const brand = this.clone.querySelector(".car-brand");
        const price = this.clone.querySelector(".product-price");
        const img = this.clone.querySelector("img");
        const detailsBtn = this.clone.querySelector(".details-btn");
        const editBtn = this.clone.querySelector(".edit-btn");
        this.clone.setAttribute("product-id", this.id);

        title.innerText = this.name;
        brand.innerText = this.brand;
        price.innerText = `${this.price}€`;
        img.src = this.imgUrl;

        detailsBtn.href = `./dettagli.html?productId=${this.id}`;
        editBtn.href = `./modifica-auto.html?productId=${this.id}`;
        
        this.target.append(this.clone);
    }
}

// FETCH E FUNZIONALITA DELLA PAGINA NON APPENA IL FETCH VIENE ESEGUITO
async function getCars () {
    try {
        const loader = document.getElementById("loader");
        loader.classList.remove("d-none");

        const data = await new DataLoader(url, apiKey).fetchData();
    
        loader.classList.add("d-none");
        const template = document.getElementById("product-template");
        const target = document.getElementById("row");
    
        for (let i = 0; i < data.length; i++) {
            new Car(data[i].name, data[i].brand, setPoints(data[i].price), data[i].imageUrl, data[i]["_id"], template, target);
        }
    } catch (error) {
        // IN ALCUNI CATCH AGGIUNGERO LA CLASSE "D-NONE" MENTRE IN ALTRI NO, IN BASE ALLE TIPOLOGIE DI ERRORE
        messageHandle("error-message", "Si è verificato un errore nel caricamento dei contenuti. Prova a ricaricare la pagina");
    }
}

getCars();