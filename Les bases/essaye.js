class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    
    showBalance() {
        console.log("Solde: " + this.balance + " EUR");
    }
    deposit(amount) {
        console.log (" vous venez de déposer " + amount + "EUR");
        this.balance += amount;
        this.showBalance ();
    }
    withdraw(amount){
        if (amount > this.balance){
            console.log ( 'Retrait refuser');
        }else{
            console.log('Retrait de ' +amount+ ' EUR');
            this.balance -= amount;
            this.showBalance();
        }
    }
}