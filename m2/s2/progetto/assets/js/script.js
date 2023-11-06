// APPARIZIONE INPUT DI TESTO
let searchButton = document.getElementById("search-button");
let searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", () => {
    searchInput.classList.toggle("hide");
});

// CAROSELLI
const carouselContainer = document.querySelector(".carousel-container");
const carousels = document.querySelectorAll(".carousel");
const width = carousels[0].firstElementChild.offsetWidth;
const previousMovie = []; // ARRAY DEI TASTI "INDIETRO" DI OGNI CAROSELLO
const nextMovie = []; // ARRAY DEI TASTI "AVANTI" DI OGNI CAROSELLO
const translate = []; // ARRAY CHE TIENE IN MEMORIA LO STATO DELLO SPOSTAMENTO DI OGNI CAROSELLO
const moviesNumber = []; // ARRAY CHE TIENE CONTO DELLA QUANTITA DI FILM DI OGNI CATEGORIA (PER RENDELO DINAMICO IN CASO OGNI CATEGORIA AVESSE UN NUMERO DIVERSO DI FILM)
const scrollX = [];
let movies, containerWidth, max, touchStart, touchEnd; // DICHIARO QUI LE VARIABILI CHE USO AD OGNI ITERAZIONE PER EVITARE DI DOVERLE DICHIARE OGNI VOLTA CON LET ALL'INTERNO DEL FOR


for (let i = 0; i < carousels.length; i++) {
    previousMovie[i] = carousels[i].previousElementSibling; // SALVO IN MEMORIA IL TASTO "INDIETRO" DI QUESTO CAROSELLO
    nextMovie[i] = carousels[i].nextElementSibling; // SALVO IN MEMORIA IL TASTO "AVANTI" DI QUESTO CAROSELLO
    translate[i] = 0; // SALVO IN MEMORIA LO STATO DELLA POSIZIONE DI QUESTO CAROSELLO
    moviesNumber[i] = carousels[i].querySelectorAll("img").length; // SALVO IN MEMORIA IL NUMERO DEI FILM DI QUESTA CATEGORIA PER USARLO NELLA VARIABILE "MAX" ALLA RIGA 34 E STABILIRE QUANTO AVANTI PUO ANDARE AL MASSIMO IL CAROSELLO
    scrollX[i] = carousels[i].scrollX;
    
    previousMovie[i].addEventListener("click", () => {
        translate[i] -= (width + 4);
        if (translate[i] < 0) translate[i] = 0;
        carousels[i].style.transform = `translateX(-${translate[i]}px)`;
    });
    
    nextMovie[i].addEventListener("click", () => {
        containerWidth = carouselContainer.offsetWidth; // LO METTO QUI DENTRO COSI SE L'UTENTE GIRA LO SCHERMO OPPURE CAMBIA DIMENSIONE DELLO SCHERMO, AD OGNI CLICK JAVASCRIPT RICONOSCE LA NUOVA DIMENSIONE DELLA FINESTRA
        translate[i] += (width + 4);
        max = (moviesNumber[i]*width) + (4*(moviesNumber[i]-2)) - containerWidth;
        if (translate[i] > max) translate[i] = max;
        carousels[i].style.transform = `translateX(-${translate[i]}px)`;
    });

    carousels[i].addEventListener("touchstart", (e) => {
        touchStart = e.touches[0].clientX;
    });

    carousels[i].addEventListener("touchmove", (e) => {
            touchEnd = e.touches[0].clientX;
            delta = touchEnd - touchStart;
            translate[i] -= delta * 1.2;
            containerWidth = carouselContainer.offsetWidth;
            
            max = (moviesNumber[i]*width) + (4*(moviesNumber[i]-2)) - containerWidth;
            if (translate[i] > max) translate[i] = max;
            if (translate[i] < 0) translate[i] = 0;

            carousels[i].style.transform = `translateX(-${translate[i]}px)`;
    });
    
    // CON QUESTA FUNZIONE EVITO CHE, SE IL CAROSELLO SI TROVA ALL'ULTIMA FOTO, ALL'AUMENTARE DELLA LARGHEZZA DELLO SCHERMO APPAIA DELLO SPAZIO NERO. cON QUESTA FUNZIONE IL CAROSELLO, SE SI TROVA ALLE ULTIME FOTO, VERRA SPOSTATO SEMPRE IN MANIERA TALE DA COPRIRE TUTTO LO SCHERMO
    window.addEventListener("resize", () => {
        containerWidth = carouselContainer.offsetWidth;
        max = (moviesNumber[i]*width) + (4*(moviesNumber[i]-2)) - containerWidth;
        if (translate[i] > max) {
            translate[i] = max;
            carousels[i].style.transform = `translateX(-${translate[i]}px)`;
        }
    });
}

// GESTIONE LAYOUT
let layoutButton1 = document.getElementById("layout-button1");
let layoutButton2 = document.getElementById("layout-button2");
let genres = document.querySelectorAll("section h2");
let buttons = document.querySelectorAll(".previous-movie i, .next-movie i");
let lenghts = [];
let films;
let originalLength = carousels[0].querySelectorAll("a").length;

for (let i = 1; i < carousels.length; i++) {
    films = carousels[i].querySelectorAll("a");
    lenghts[i] = films.length;
}

layoutButton1.addEventListener("click", () => {
    layoutButton1.classList.add("layout-selection");
    layoutButton2.classList.remove("layout-selection");
    films = Array.from(carousels[0].querySelectorAll("a"));
    
    for (let genre of genres) genre.classList.remove("hide");
    for (let button of buttons) button.classList.remove("hide");

    for (let i = 0; i < carousels.length; i++) {
        for (let j = 0; j < lenghts[i]; j++) {
            console.log(Array.isArray(films));
            carousels[i].append(films[originalLength]);
            films.splice(originalLength, 1);
        }
    }

    carousels[0].classList.remove("flex-wrap");
    carousels[0].classList.remove("justify-content-center");
    carousels[0].parentElement.classList.remove("height-auto");
    carousels[0].parentElement.parentElement.classList.remove("overflow-visible");
});

layoutButton2.addEventListener("click", () => {
    layoutButton1.classList.remove("layout-selection");
    layoutButton2.classList.add("layout-selection");

    for (i = 1; i < carousels.length; i++) {
        films = carousels[i].querySelectorAll("a");
        for (let film of films) carousels[0].append(film);
        carousels[i].parentElement.style.height = "auto";
    }

    for (let genre of genres) genre.classList.add("hide");
    for (let button of buttons) button.classList.add("hide");

    carousels[0].classList.add("flex-wrap");
    carousels[0].classList.add("justify-content-center");
    carousels[0].parentElement.classList.add("height-auto");
    carousels[0].parentElement.parentElement.classList.add("overflow-visible");
});

function handleClasses (el, list) {
    action = list ? "remove" : "add";

    el.classList[action]("flex-wrap");
    el.classList[action]("justify-content-center");
    el.parentElement.classList[action]("height-auto");
    el.parentElement.parentElement.classList[action]("overflow-visible");
}