const apiKey = "72LOYkDgKR8Ub1SShZOFwsQSKFrNClCf2dPkPzqCQXW4aY6GqKYV46eU";
const query = "https://api.pexels.com/v1/search?query=";
const firstBtn = document.getElementById("first-btn");
const secondBtn = document.getElementById("second-btn");
const input = document.getElementById("input");
const chooseBtn = document.getElementById("choose-btn");
const cards = document.querySelectorAll("main .album .card");

let storageQuery = sessionStorage.getItem("query");
if (storageQuery) cardsHandle(storageQuery, cards);

firstBtn.addEventListener("click", () => {
    cardsHandle("formula1", cards);
});

secondBtn.addEventListener("click", () => {
    cardsHandle("football", cards);
})

chooseBtn.addEventListener("click", () => {
    cardsHandle(input.value, cards);
    input.value = "";
})

async function cardsHandle (param, cards) {
    const response = await fetch(query + param, {
        headers: {
            Authorization: apiKey,
        }
    })
    const photoList = await response.json();

    for (let i = 0; i < cards.length; i++) {
        cards[i].firstElementChild.remove();
        let img = document.createElement("img");
        img.src = photoList.photos[i].src.tiny;
        cards[i].prepend(img);
        let id = cards[i].querySelector("small");
        id.innerText = photoList.photos[i].id;
        let queryId = photoList.photos[i].id;
        sessionStorage.setItem("query", param);

        let viewBtn = cards[i].querySelector("button:first-child");
        let hideBtn = cards[i].querySelector("button:last-child");

        img.addEventListener("click", () => {
            window.location.assign("./image-detail.html?picId=" + queryId);
        });

        id.addEventListener("click", () => {
            window.location.assign("./image-detail.html?picId=" + queryId);
        });

        viewBtn.setAttribute("data-bs-toggle", "modal");
        viewBtn.setAttribute("data-bs-target", "#modal");

        hideBtn.addEventListener("click", () => {
            cards[i].remove();
        })
    }
}