class Account {
    balance:number;
    interest:number;

    constructor (public name:string, public surname:string, public creationDate:Date) {
        this.balance = 0;
        this.interest = 10;
    }

    updateBalance (date:Date, show:boolean = false):void {
        for (let i = 0; i < this.addInterest(date); i++) {
            this.balance += (this.balance / 100) * this.interest;
        }
        if (show) console.log(`Conto di ${this.name} ${this.surname}:\nSaldo: ${this.balance}€`)
    }

    deposit (amount:number, date:Date):void {
        this.updateBalance(date);
        this.balance += amount;
        console.log(`Conto di ${this.name} ${this.surname}:\nDeposito effettuato con successo. Nuovo saldo: ${this.balance}€`);
    }

    withdraw (amount:number, date:Date):void {
        this.updateBalance(date);
        if (this.balance > amount) {
            this.balance -= amount;
            console.log(`Conto di ${this.name} ${this.surname}:\nPrelievo effettuato con successo. Nuovo saldo: ${this.balance}€`);
        } else {
            console.log(`Conto di ${this.name} ${this.surname}:\nSaldo insufficiente: ${this.balance}€`);
        }
    }

    isLeapYear (year:number):boolean {
        return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));
    }

    addInterest (date:Date):number {
        const creationYear:number = this.creationDate.getFullYear();
        const dateYear:number = date.getFullYear();
        let leapYearsCounter:number = 0;
        for (let year:number = creationYear; year < dateYear; year++) {
            if (this.isLeapYear(year)) leapYearsCounter++;
        }

        const creationTimestamp:number = this.creationDate.getTime();
        const dateTimestamp:number = date.getTime() - (leapYearsCounter * 24 * 60 * 60 * 1000);
        const diff:number = dateTimestamp - creationTimestamp;
        console.log(Math.floor(diff / (1000 * 60 * 60 * 24 * 365)));
        return (Math.floor(diff / (1000 * 60 * 60 * 24 * 365)));
    }
}

const contoPrincipale = new Account("Gabriele", "Iannuzzo", new Date());
contoPrincipale.updateBalance(new Date, true);
contoPrincipale.deposit(1000, new Date("2023-11-25"));
contoPrincipale.withdraw(1100, new Date("2024-12-12"));