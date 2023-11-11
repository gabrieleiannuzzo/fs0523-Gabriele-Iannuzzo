// FUNZIONE PER INSERIRE IL PUNTO DALLE MIGLIAIA IN POI
function setPoints(number){
    if (number < 100) return number;
    const stringNumber = number.toString();
    const arr = [];
    let tempString = "";
    
    for (let i = 0; i < stringNumber.length; i++) {
        tempString += stringNumber[i];
        if ((i + 1) % 3 == 0) {
            arr.push(tempString);
            tempString = "";
        }
    }

    return arr.join(".");
}

// FUNZIONE PER GESTIRE I MESSAGGI DI ERRORE
function messageHandle (c, text, fade = false) {
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