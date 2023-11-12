const loader = document.getElementById("loader");

// CLASSE DELLE MACCHINE DEL BACK OFFICE
class Car {
    constructor(name, brand, price, description, id, template, target, grey) {
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

    HTMLInit() {
        const name = this.clone.querySelector(".product-name");
        const brand = this.clone.querySelector(".product-brand");
        const price = this.clone.querySelector(".product-price");
        const description = this.clone.querySelector(".product-description");
        const editBtn = this.clone.querySelector(".edit-btn");
        const deleteBtn = this.clone.querySelector(".delete-btn");
        this.clone.setAttribute("product-id", this.id);
        const modal = document.getElementById("delete-modal");

        if (this.grey) this.clone.classList.add("grey");
        name.innerText = this.name;
        brand.innerText = this.brand;
        price.innerText = `${setPoints(this.price)}€`;
        description.innerText = this.description;

        editBtn.href = `./modifica-auto.html?productId=${this.id}`;
        deleteBtn.addEventListener("click", () => {
            modal.setAttribute("product-id", this.id);
        })

        this.target.append(this.clone);
    }
}

async function fetchData() {
    try {
        loader.classList.remove("d-none");

        // DISTRUGGO E RICREO SEMPRE LA LISTA DI MACCHINE PER 2 MOTIVI:
        // - SE QUALCHE ALTRO IPOTETICO ADMIN, CONTEMPORANEAMENTE A ME, HA AGGIUNTO O RIMOSSO ALTRE MACCHINE, DEVO AVERE IL DATO AGGIORNATO
        // - L'ALTERNANZA DI COLORI GRIGIO/BIANCO DELLA LISTA RIMANE CORRETTA
        const products = document.querySelectorAll(".product:not(#legend)");
        for (let product of products) product.remove();

        const data = await new DataLoader(url, apiKey).fetchData();

        loader.classList.add("d-none");

        const template = document.getElementById("car-template");
        const target = document.getElementById("back-office-div");
        let grey;

        for (let i = 0; i < data.length; i++) {
            if (i % 2 == 0) {
                grey = true;
            } else {
                grey = false;
            }

            new Car(data[i].name, data[i].brand, data[i].price, data[i].description, data[i]["_id"], template, target, grey);
        }
    } catch (error) {
        messageHandle("error-message", "Si è verificato un errore nel caricamento dei contenuti. Prova a ricaricare la pagina");
    }
}

async function deleteCar(id) {
    try {
        loader.classList.remove("d-none");
        
        await new DataLoader(url + id, apiKey, "DELETE").fetchData();

        messageHandle("success-message", "Auto eliminata con successo", true);
        
        // NON AGGIUNGO NUOVAMENTE LA CLASSE "D-NONE" AL LOADER PERCHE TANTO DEVE PARTIRE NUOVAMENTE LA FUNZIONE FETCHDATA, CHE COME PRIMA AZIONE RIMUOVE LA CLASSE "D-NONE". DI CONSEGUENZA, AGGIUNGO LA CLASSE DIRETTAMENTE NEL CATCH
        fetchData();
    } catch {
        loader.classList.add("d-none");
        messageHandle("error-message", "Si è verificato un errore nell'eliminazione dell'auto. Riprova", true);
    }
}

const modal = document.getElementById("delete-modal");
const deleteConfirmBtn = document.getElementById("delete-confirm-btn");
deleteConfirmBtn.addEventListener("click", () => {
    deleteCar(modal.getAttribute("product-id"));
})

fetchData();