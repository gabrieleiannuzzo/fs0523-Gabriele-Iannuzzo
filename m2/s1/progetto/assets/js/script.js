// FUNZIONE PER L'HEADER DINAMICO
let header = document.querySelector("header");
let headerButton = document.querySelector("header nav button");

window.addEventListener("scroll", () => {
    let top = window.scrollY;

    if (top >= 380) {
        header.classList.add("white");
        headerButton.classList.add("green");
    } else {
        header.classList.remove("white");
        headerButton.classList.remove("green");
    }
});

// FUNZIONE PER LE M
let gs = document.querySelectorAll(".g-pattern > g");
let max = gs.length;
let array = [];

fill();
hide();
show();

setInterval(() => {
    hide();
    show();
}, 5500);

function fill () {
    for (let i = 0; i < 50; i++) {
        let random;

        do {
            random = Math.floor(Math.random() * max);
        } while (array.includes(random));

        array.push(random);
    }
}

function hide () {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            gs[array[i]].style.opacity = "0";
        }, 50 + 50*i);
    }
}

function show () {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            gs[array[i]].style.opacity = "1";
        }, 2550 + 50*i);
    }
}

// FUNZIONE PER IL POPUP AL CLICK DEI PULSANTI
let buttons = document.querySelectorAll("#hero-section button, header button");
let popup = document.getElementById("popup");
let closeButton = document.getElementById("close");
let panel = document.getElementById("panel");

for (b of buttons) {
    b.addEventListener("click", () => {
        popup.style.display = "flex";
        panel.style.display = "block";
        document.body.style.overflow = 'hidden';
    });
}

closeButton.addEventListener("click", () => {
    popup.style.display = "none";
    panel.style.display = "none";
    document.body.style.overflow = '';
});

// FUNZIONE PER L'APPARIZIONE DEL DIV ALL'HOVER DEI NOMI DEGLI AUTORI DEI POST
let hoverDivs = document.querySelectorAll(".author-hover");
console.log(hoverDivs);

for (let i = 0; i < hoverDivs.length; i++) {
    let name = hoverDivs[i].innerHTML;
    let random = Math.floor(Math.random() * 1000); // ASSOCIO RANDOMICAMENTE UN NUMERO DI FOLLOWERS ALL'AUTORE, E QUESTO NUMERO NON CAMBIA FINCHE NON SI REFRESHA LA PAGINA
    
    hoverDivs[i].addEventListener("mouseenter", () => {
        // CREAZIONE CARD
        let template = document.querySelector("template");
        let clone = document.importNode(template.content, true);
        hoverDivs[i].append(clone);
        
        // CUSTOMIZZAZIONE CARD
        let photo = hoverDivs[i].parentElement.previousElementSibling.getAttribute("src");
        let photoHover = document.querySelector("#hover-card #hover-author-info img");
        let nameHover = document.querySelector("#hover-card #hover-author-info p");
        let followers = document.querySelector("#hover-card #followers");
    
        photoHover.src = photo;
        nameHover.innerHTML = name;
        followers.innerText = `${random}K Followers`;

        let hoverCard = document.getElementById("hover-card");
        switch (name) {
            case "Arthur Hayes":
                hoverCard.style.left = "95px";
                break;
            case "Erin A Ross":
                hoverCard.style.left = "85px";
                break;
            case "Frank Mastropolo":
                hoverCard.style.left = "120px";
                break;
            case "Frank Andrade":
                hoverCard.style.left = "102px";
                break;
            case "Wesley Smits":
                hoverCard.style.left = "96px";
                break;
            case "Robert Roy Britt":
                hoverCard.style.left = "110px";
                break;
            case "Taru Anniina Liikanen":
                hoverCard.style.left = "142px";
                break;
            case "David Rodenas, PH. D.":
                hoverCard.style.left = "145px";
                break;
            case "Microsoft Design":
                hoverCard.style.left = "116px";
                break;
            case "Scott H. Young":
                hoverCard.style.left = "105px";
                break;
            case "Paul A. DeStefano":
                hoverCard.style.left = "122px";
                break;
            case "Kim Scott":
                hoverCard.style.left = "75px";
                break;
        }
    });

    hoverDivs[i].addEventListener("mouseleave", () => {
        document.getElementById("hover-card").remove();
    });
}