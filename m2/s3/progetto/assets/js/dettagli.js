const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("productId");

fillPage();

async function fillPage() {
    try {
        const loader = document.getElementById("loader");
        loader.classList.remove("d-none");

        const data = await new DataLoader(url + productId, apiKey).fetchData();

        loader.classList.add("d-none");
        HTMLHandle(data);
    } catch (error) {
        messageHandle("error-message", "Si è verificato un errore nel caricamento dei dati dell'auto. Prova a ricaricare la pagina");
    }
}

function HTMLHandle(data) {
    const h1 = document.querySelector("h1");
    const img = document.getElementById("img");
    const title = document.getElementById("title");
    const brand = document.getElementById("brand");
    const description = document.getElementById("description");
    const price = document.getElementById("price");

    h1.innerText = `Dettagli - "${data.name}"`;
    img.src = data.imageUrl;
    title.innerText = data.name;
    brand.innerText = data.brand;
    description.innerText = data.description;
    price.innerText = `${setPoints(data.price)}€`;
}