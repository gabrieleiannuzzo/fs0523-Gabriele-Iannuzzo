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
}

// CON QUESTA FUNZIONE EVITO CHE, SE IL CAROSELLO SI TROVA ALL'ULTIMA FOTO, ALL'AUMENTARE DELLA LARGHEZZA DELLO SCHERMO APPAIA DELLO SPAZIO NERO. cON QUESTA FUNZIONE IL CAROSELLO, SE SI TROVA ALLE ULTIME FOTO, VERRA SPOSTATO SEMPRE IN MANIERA TALE DA COPRIRE TUTTO LO SCHERMO
window.addEventListener("resize", () => {
    containerWidth = carouselContainer.offsetWidth;
    for (let j = 0; j < carousels.length; j++) {
        max = (moviesNumber[j]*width) + (4*(moviesNumber[j]-2)) - containerWidth;
        if (translate[j] > max) {
            translate[j] = max;
            carousels[j].style.transform = `translateX(-${translate[j]}px)`;
        }
    }
});