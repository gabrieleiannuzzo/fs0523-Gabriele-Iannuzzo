var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function (e) {
    e.preventDefault();
    var number1 = input1 === null || input1 === void 0 ? void 0 : input1.value;
    var number2 = input2 === null || input2 === void 0 ? void 0 : input2.value;
    var randomNumber = generateRandomNumber();
    var diff1 = Math.abs(Number(number1) - randomNumber);
    var diff2 = Math.abs(Number(number2) - randomNumber);
    var player = diff1 < diff2 ? 1 : 2;
    var diff = diff1 < diff2 ? diff1 : diff2;
    var string = "Il giocatore ".concat(player, " ci \u00E8 andato pi\u00F9 vicino");
    if (diff == 0)
        string = "Il giocatore ".concat(player, " ha indovinato il numero");
    if (diff1 == diff2)
        string = "I giocatori sono andati ugualmente vicini al numero";
    if (diff1 == diff2 && diff == 0)
        string = "Entrambi i giocatori hanno indovinato il numero";
    alert("Il numero estratto \u00E8 il ".concat(randomNumber, "\n").concat(string));
});
function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}
