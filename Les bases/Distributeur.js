class personne {
  constructor(firstName, lastName, age, balance, genderIsMale) {
    this.fistname = firstName;
    this.lastName = lastName;
    this.balance = balance;
    this.gender = genderIsMale;
    this.name = firstName + " " + lastName;
    this.age = age;
  }
}

let isMajeur = 18;

let user1 = new personne("Anthony", "Bernabel", 35, 3000, true);
let user2 = new personne("Jon", "Bernabel", 37, 10000, true);
let user3 = new personne("Lola", "Bernabel", 11, 3000, false);
let user4 = new personne("Marie-José", "Martin", 60, 10000000, false);

function gender(customer) {
  if (customer.gender === true) {
    return "Bonjour monsieur " + customer.name;
  } else if (customer.age < isMajeur) {
    return "Bonjour mademoiselle " + customer.name;
  } else {
    return "Bonjour madame " + customer.name;
  }
}
// console.log(gender(user1));
// console.log(gender(user2));
// console.log(gender(user3));
// console.log(gender(user4));

function showBalance(customer) {
  if (customer.gender === true) {
    return console.log(
      "Cher Mr." +
        customer.name +
        " votre solde actuel est de " +
        customer.balance +
        " EUR."
    );
  } else if (customer.age < isMajeur) {
    return console.log(
      "Cher Mlle." +
        customer.name +
        " votre solde actuel est de " +
        customer.balance +
        " EUR."
    );
  } else {
    return console.log(
      "Cher Md." +
        customer.name +
        " votre solde actuel est de " +
        customer.balance +
        " EUR."
    );
  }
}
// showBalance(user1);
// showBalance(user2);
// showBalance(user3);
// showBalance(user4);

function deposite(customer, value) {
  if (value >= 5000) {
    console.log(
      "Vous ne pouvez pas déposé cette quantitée d'argent a ce distributer, veuiller le faire à l'interieur"
    );
  } else {
    customer.balance += value;
    console.log("Vous venez de déposer " + value + " EUR.");
  }
}
///deposite(user3, 999)

function withdraw(customer, value) {
  if (customer.age < isMajeur && value >= 1000) {
    console.log(
      "En raison de votre age vous ne pouvez pas retirer cette quantiter d'argent!"
    );
  } else if (value > customer.balance) {
    console.log("Vous ne pouvez pas retirer " + value + " EUR.");
  } else {
    customer.balance -= value;
    console.log("Vous avez retirer " + value + " EUR");
  }
}
//withdraw (user3, 4000)

// function depot (customer, value){
//   console.log(gender(customer));
//   deposite(customer, value);
//   showBalance(customer);
// }
// depot(user3,999);

// function retrait(customer, value){
//   console.log(gender(customer))
//   withdraw(customer, value);
//   showBalance(customer);
// }
// retrait(user3,500);
