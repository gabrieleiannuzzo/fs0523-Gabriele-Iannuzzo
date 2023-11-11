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