

/**
 * création user
 * @param {string} name - Nom de la personne
 * @param {number} age - Age de la personne
*/
/*
function Person(name, age) {
Person("Michael", 43);

};
console.log("hello world");
console.error("attention il y a erreur");
console.warn("attention il y a un warning");


//Déclaration de variable

// var, let, const
const taux = 1.2;
const fruits = [
    'fraise', 'pomme' , 'orange'
];
console.table(fruits);

function ttc(priceht){
    return priceht * taux
}
//console.log(taux);
console.log(ttc(20));*/


//type de variables

/*string
boolean
integer/number
array
object
undifined
null*/

console.log(typeof taux);

const apprenant = {
    prenom : "michael",
    nom : "moussaoui",
    age : 43,
    stack : [
        'ruby', 'perl', 'c', 'matlab'
    ],
    isAdmin: false,
};
/*
apprenant.sexe = "male";
console.log(apprenant.age);
delete apprenant.age;
console.log(apprenant);

// function
// function sayHello(name){
//     console.log(`bonjour je m'appelle "${name}"`);
// }


const sayHello = (name) =>{
    console.log(`bonjour je m'appelle "${name}"`);
}
sayHello("michael");

//boucles

/*for(let i = 1; i <= 10 ; i++){
    console.log(i);
}*/
/*
let i=0
while(i<=10){
    console.log(i);
    i++;
}*/


apprenant.stack.forEach(element => {
    if (element !== 'php'){
    result='dommage pas de php';
}
if (element === 'ruby'){
    console.log('engagé');
}
console.log(element);


});

