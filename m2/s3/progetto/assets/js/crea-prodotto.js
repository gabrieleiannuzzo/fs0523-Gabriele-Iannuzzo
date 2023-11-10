let apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMTEyZTMyNWM5NzAwMTg3ZjlmZTYiLCJpYXQiOjE2OTk2MTUwMjIsImV4cCI6MTcwMDgyNDYyMn0.R5RBuhRA3qqu2SpJbbKquMjlimyliws3H3IK9JwOFV0";
let url = "https://striveschool-api.herokuapp.com/api/product/";

function setPoints(number){
    if (number < 100) return number;
    let stringNumber = number.toString();
    let tempString = "";
    let arr = [];
    
    for (let i = 0; i < stringNumber.length; i++) {
        tempString += stringNumber[i];
        console.log(tempString);
        if ((i + 1) % 3 == 0) {
            arr.push(tempString);
            tempString = "";
        }
    }

    return arr.join(".");
}

console.log(setPoints(25));