// CLASSE DELLE MACCHINE DEL BACK OFFICE
class Car {
    constructor(name, brand, price, description, id, template, target, grey){
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.description = description;
        this.id = id;
        this.template = template;
        this.clone = document.importNode(this.template.content, true).firstElementChild;
        this.target = target;
        this.grey = grey;
        this.HTMLInit();
    }

    HTMLInit () {
        const name = this.clone.querySelector(".product-name");
        const brand = this.clone.querySelector(".product-brand");
        const price = this.clone.querySelector(".product-price");
        const description = this.clone.querySelector(".product-description");
        const editBtn = this.clone.querySelector(".edit-btn");
        const deleteBtn = this.clone.querySelector(".delete-btn");
        this.clone.setAttribute("product-id", this.id);
        const modal = document.getElementById("delete-modal");
        console.log(name)
        console.log(brand)
        console.log(price)
        console.log(description)
        console.log(deleteBtn)

        if (this.grey) this.clone.classList.add("grey");
        name.innerText = this.name;
        brand.innerText = this.brand;
        price.innerText = `${setPoints(this.price)}€`;
        description.innerText = this.description;

        editBtn.href = `./modifica-prodotto.html?productId=${this.id}`;
        deleteBtn.addEventListener("click", () => {
            modal.setAttribute("product-id", this.id);
        })
        
        this.target.append(this.clone);
    }
}

async function fetchData () {
    // DISTRUGGO E RICREO SEMPRE LA LISTA DI MACCHINE PER 2 MOTIVI:
    // - SE QUALCHE ALTRO IPOTETICO ADMIN, CONTEMPORANEAMENTE A ME, HA AGGIUNTO O RIMOSSO ALTRE MACCHINE, DEVO AVERE IL DATO AGGIORNATO
    // - L'ALTERNANZA DI COLORI GRIGIO/BIANCO DELLA LISTA RIMANE CORRETTA
    let products = document.querySelectorAll(".product:not(#legend)");
    for (let product of products) product.remove();

    const response = await fetch(url, {
        headers: {
            "Authorization": apiKey,
        }
    });
    const data = await response.json();

    const template = document.getElementById("car-template");
    const target = document.getElementById("back-office-div");
    let grey;
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            grey = true;
        } else {
            grey = false;
        }

        new Car(data[i].name, data[i].brand, data[i].price, data[i].description, data[i]["_id"], template, target, grey);
    }
}

async function deleteCar (id) {
    await fetch(url + id, {
        method: "DELETE",
        headers: {
            "Authorization": apiKey,
        }
    });

    fetchData();
}

const modal = document.getElementById("delete-modal");
const deleteConfirmBtn = document.getElementById("delete-confirm-btn");
deleteConfirmBtn.addEventListener("click", () => {
    deleteCar(modal.getAttribute("product-id"));
})

fetchData();