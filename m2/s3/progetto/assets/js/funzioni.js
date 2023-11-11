const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMTEyZTMyNWM5NzAwMTg3ZjlmZTYiLCJpYXQiOjE2OTk2MTUwMjIsImV4cCI6MTcwMDgyNDYyMn0.R5RBuhRA3qqu2SpJbbKquMjlimyliws3H3IK9JwOFV0";
const url = "https://striveschool-api.herokuapp.com/api/product/";

// FUNZIONE PER INSERIRE IL PUNTO DALLE MIGLIAIA IN POI
function setPoints(number) {
    const stringNumber = number.toString();
    const arr = [];
    let tempArr = [];
    let tempString = "";
    let counter = 0;

    for (let i = (stringNumber.length - 1); i >= 0; i--) {
        tempArr.unshift(stringNumber[i]);
        counter += 1;
        if ((counter % 3 == 0) || i == 0) {
            tempString = tempArr.join("");
            arr.unshift(tempString);
            tempArr = [];
            tempString = "";
        }
    }

    return arr.join(".");
}

// FUNZIONE PER GESTIRE I MESSAGGI DI ERRORE
function messageHandle(c, text, fade = false) {
    let message = document.querySelector(".my-alert");

    message.innerHTML = text;
    message.classList.remove("d-none");
    message.classList.add(c);

    if (fade) {
        setTimeout(() => {
            message.classList.add("d-none");
            message.classList.remove(c);
        }, 3000);
    }
}