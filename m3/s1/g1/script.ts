const input1:HTMLInputElement|null = <HTMLInputElement>document.getElementById("input1");
const input2:HTMLInputElement|null = <HTMLInputElement>document.getElementById("input2");
const button:HTMLButtonElement|null = document.querySelector("button");

button?.addEventListener("click", (e:MouseEvent) => {
    e.preventDefault();

    const number1:string|undefined = input1?.value;
    const number2:string|undefined = input2?.value;
    const randomNumber:number = generateRandomNumber();
    const diff1:number = Math.abs(Number(number1) - randomNumber);
    const diff2:number = Math.abs(Number(number2) - randomNumber);
    const player:number = diff1 < diff2 ? 1 : 2;
    const diff:number = diff1 < diff2 ? diff1 : diff2;
    let string:string = `Il giocatore ${player} ci è andato più vicino`;
    if (diff == 0) string = `Il giocatore ${player} ha indovinato il numero`;
    if (diff1 == diff2) string = "I giocatori sono andati ugualmente vicini al numero";
    if (diff1 == diff2 && diff == 0) string = "Entrambi i giocatori hanno indovinato il numero";

    alert(`Il numero estratto è il ${randomNumber}\n${string}`);
});

function generateRandomNumber ():number {
    const randomNumber:number = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}