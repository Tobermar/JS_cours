
'les commentaires et variables' 

// sur une ligne
/* sur
plusieurs lignes*/

let myVariable = 'string', number, boolean ;

console.log(myVariable)
'----------------------------------'


'Incrémentations & décrémentation'

// integer = chiffre rond (2)

// float = chiffre à virgule (2.0)

--Basique

 x = x + 1;
 x = x - 1;

--Raccourcis JS

x++; //x = x + 1
x--; // x = x - 1
'----------------------------------'


'Concaténation' (`c'est un operateur, c'est addition entre chaine de caractere`)

let str = 'Alexis' + ' ' + 'Antoine';
let str = 'Alexis ' +  'Antoine'  ;    //les trois façons sont justes
let str = 'Alexis' +  ' Antoine';

let str = 'Alexis';
str += ' Antoine';                  // pour "additioner" en deux lignes

let string = 'Alexis Antoine';   
console.log(string.length) ;         // por connaitre le nombre de caractère

let string = 'Alexis Antoine';
console.log(string[0]) ;             // Pour connaitre le [x] position
                                    // dans ce cas 'A' car ça (l'index) commence a 0 et pas a 1 
'----------------------------------'


'Array(Tableau)'

let friends = ['Alex', 24,'Homme'];
console.log(friends)  ;              // rend simplement la tableau

let friends = [['Alex', 24,'Homme']['Pierre', 31, 'Homme']];   // pour mettre un array dans un array
console.log(friends[0]) ;        // rend le premier tableau (alex 21 homme)
console.log(friends[0][1]) ;    // rend 24

friends[1][0] = 'Jean';         // change la valeur de Pierre pour Jean


let numbers = [1, 5, 4, 3, 2]

    'les fonctions des tableaux'

numbers.push(6);                //ajoute '6' a la fin du array
numbers.pop();                  // retirer le dernier element

numbers.unshift(0);             // ajouter '0' au début du array
numbers.shift();                // retirer le premier element

numbers.slice(2);               // commence la array a partir de l'index 2 (3eme place)
console.log(numbers.slice(2))   // Si on veut console.log il doit être écrit comme ça pas en deux lignes
numbers.slice(2, 4);            // de l'index 2 au 4 EXCLUT


numbers.sort(function(a, b){    // cette fonction trie les chiffres du plus petit au plus grand
    return a - b;
})
numbers.sort(function(a, b){    // cette fonction trie les chiffres du plus petit au plus grand
    return b - a;               //  du plus grand au plus petit
})
numbers.sort((a, b) => a-b);    // Meme chose mais écris plus simple façon ES6 et plus
'----------------------------------'


'Les fonctions'

function nomDeLaFonction(parametre1,parametre2, auBesoin){
};


function sayHello(){
    console.log("Salut les boyz")
}
sayHello();                     //pour apeler la fonction


function sayHello(param1, param2){
    console.log("Salut " + param1 + " et " + param2 + "!");
}
sayHello("Alex", "Jean");       // lance la fonction "sayHello" avec Alex=param1 et jean=param2


function sayHello(param1, param2){
    console.log(`Salut${param1} et ${param2} !`);       //En ES6
}
sayHello("Alex", "Jean");


let global = 5;                 //Global scope 'global' sera dispo dans tout le code
function addition(x){
    let y = 5 ;                 //local scope 'y' sera defini que dans la fonction
    console.log(global+x);
}
addition(5);


function addition(num){
    return num *5;          //'return' sert a "envoyer" la valeur en dehors de la fonction
                            // si on utiise pas 'return' ça marcha pas(undefined).
}
let result = addition(5);
console.log(result);
'----------------------------------'


'Condition'

userAge = 18;

if (userAge < 18){
    console.log('mineur');
}else if (userAge == 18) {
    console.log('tout juste');
}else{
    console.log('adulte');
}


'switch'                            // n'accepte que le stricte cad pas de < > = 

let fruit = 'banane'

switch(fruit) {
    case 'banane':
        console.log(`Ce fruit est : ` + fruit + ` !`);
        break;
    case 'mangue':
        console.log(`Ce fruit est : ` + fruit + ` !`);
        break;
    case'pomme':
        console.log(`Ce fruit est : ` + fruit + ` !`);
        break;
    case 'fraise':
        console.log(`Ce fruit est : ` + fruit + ` !`);
        break;
    case'orange' :
        console.log(`Ce fruit est : ` + fruit + ` !`);
        break;
    default :
        console.log(`Ceci n'est pas un fruit`);  
        break; 
}
'----------------------------------'

'les objets'

let objet ={                       // format type d'un objet
    key : "value",                 // un objet a differente "clé" qui chacune a un "valeur"
    key2 : 25,                      // qui peut etre sting, boolean ou number ne pas oublier les ","
    key3 : true,                   // ":" et pas egal ca se ne sont pas de variables
}


let friendOne= {
    name : "Alex",
    age : 25,
    isMajeur : true,
    hobbies : ["Lecture", "Natation", "Courir"],
}
friendOne.study = "Développeur";        // ajouter un clé et sa valeur
delete friendOne.isMajeur               // retiter une clé
friendOne.hobbies[2]="dormir";          // changer la valeur "2" du tablea
friendOne.hobbies.push("manger");       // ajouter un valeur en bas du tableau
'----------------------------------'

'les boucles'

"while"                                 // pour "while" on déclare a l'exterieur de la boucle

let i = 0;
while (i < 5){                        
    i++;
}


"for"                                 // "for" on déclare dans la boucle

for (let i = 0 ; i < 5 ; i++){         // ( on creer la variable ; on donne la condition; l'acction(incrémenter))
    console.log(i) ;                   // Bien mettre les {} pour aue le consol.log soit dans la boucle
}       

for ( let i = 0 ; i < 10 ; i += 2) {}   // on incrémente de 2, du coups on aura que les chiffre paires
for ( let i = 1 ; i < 10 ; i += 2) ;   // on aura les impaires.
for  (let i = 10 ; i > 0 ; i-=2);      // décroissant paire


"itérer à travers un array ou objet"  

let arr = [12, 10, 8, 6, 4, 2, 0];
let obj = {a:1, b:2, c:3, d:4};

for (numbers of arr){               // for of s'utilise pour les arrays
    console.log(numbers);
}
for (key in obj){                  //for in s'utilise pour les objets
    console.log(key);
}
for (value in obj){                 // renvoies la clé = la valeur de la clé a = 1; b = 2 ,...
    console.log(value +' = '+ obj[value]);
}
'----------------------------------'


'Operateur ternaire'            //condition if else en 1 ligne

age = 17;

if (age < 18){
    console.log('mineur');
} else {
    console.log("majeur")
}

age = 17                    //condition ? if-true : else-false

age < 18 ? 'mineur' :'majeur';          
console.log(age < 18 ? 'mineur' :'majeur'); //pour visualisé
'----------------------------------'


'let, var et const'

/*'let' n'existe que dans son scope a la difference de 'var' qui existe dans tout le code
et 'const' ne peut pas ré-assigner sa valeur.*/

const arr = [5, 8, 25];
arr[2]= 156;
console.log(arr);

/* mais la ça marche pcq c'est pas LA valeur*/
'----------------------------------'


'fonction fléchées'

let func = function (){
    let value = 3;
    return value;
};
console.log(func())

const functTwo = () => {
    const myValue = 10;
    return myValue;                     
};
console.log(functTwo())

const functTwo = (x) => console.log(x);     // la maniere d'écrire en fonction fléchée
functTwo (10);

const functThree = (x, y) => console.log(x + y);
functThree(10, 15);

const carre = nombreAuCarre => console.log(nombreAuCarre*nombreAuCarre);
carre(10);                              // pas besoin de parenthèses qd il y a un seul parametre
'----------------------------------'


'les opérateurs Rest & Spread'

"Rest"
// l'opérateur "rest" permet de récuperer plusieurs arguments DANS une FONCTION

function add (x,y){
    console.log(x+y);
}
add(5,3)

function addition(x = 2, y = 10){   //dans ES6 et + on peut mettre des valeurs par defaut aux arguments
    console.log(x+y);
}
addition()
addition(2,3)                      // et rechanger les valeur au besoin


function rest_op(...args){
    console.log("Cette fontion comporte " + args.length + " arguments!");
}
rest_op(1, 2, 3, 4, 5, 6, 7, 8) ;    // "..." pour ne pas devoir mettre d'argument.
rest_op(1,4);
rest_op("chaine", "de", "carractere")   ;

"Spread"
// l'opérateur "spread" permet de récuperer plusieurs valeurs DANS un TABLEAU

const userAge = [14, 28, 25, 94, 45, 39, 29, 64];
const maxUserAge = Math.max (...userAge);           // Math s'ecrit avec un M majuscule
const minUserAge = Math.min (...userAge);           // permet de selectioner la plus gross et plus petite valeur du array

console.log(maxUserAge);
console.log(minUserAge);
'----------------------------------'


'déstructuration'
/* permet d'avoir plusieurs variables mis a un seul endroit avec des crochets afin 
de pouvoir lire le contenu d'un tableau ou un array.
Permet d'asigner plusieur variable plus rapidement*/

const friends={name :"Alex", age : 24, isMajeur : true};
let name = friends.name;
let age = friends.age;
let isMajeur = friends.isMajeur;
console.log(isMajeur);

//ou alors 
const friends={name :"Alex", age : 24, isMajeur : true};
const { name, age, isMajeur}= friends;
console.log(isMajeur);


const [age1, age2, , ,age5] = [15, 25, 65, 85, 56] ;
console.log (age1, age2, age5)
'----------------------------------'


'les classes'
// Permet de créée des objets plus simplement ça n'a rien a voir avec l'OOP

class user{
    constructor(username){
        this.username = username;
    }
}
const user1 = new user('Alexis');
console.log(user1.username)


class userinfo {
    constructor(user){
        this.user = user ;
    }
    get name(){
        return this.user;
    }
    set userName(updatedName){
        this.user = updatedName;
    }
}
const newUser1 = new userinfo('Justine');
console.log(newUser1.name)
newUser1.newName = 'Alexis';
console.log(newUser1.name);