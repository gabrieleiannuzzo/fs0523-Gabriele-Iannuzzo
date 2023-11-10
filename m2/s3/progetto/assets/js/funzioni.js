const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMTEyZTMyNWM5NzAwMTg3ZjlmZTYiLCJpYXQiOjE2OTk2MTUwMjIsImV4cCI6MTcwMDgyNDYyMn0.R5RBuhRA3qqu2SpJbbKquMjlimyliws3H3IK9JwOFV0";
const url = "https://striveschool-api.herokuapp.com/api/product/";

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