//Ejemplos con Var

var firstName; //declarar (undefined)
firstName = "Oscar" //asignar
console.log(firstName);

var lastName = "David"; //declarar y asignar
lastName = "Ana"; //reasignar
console.log(lastName);

var secondName = "David"; //declarar y asignar
var secondName = "Ana"; //redeclarar
console.log(secondName);

//Ejemplos con Let

let thing; //declarar (undefined)
thing = "Clock"; //asignar
console.log(thing);

let fruit = "Apple"; //declarar y asignar
fruit = "Kiwi"; //reasignar
console.log(fruit);

//let fruit = "Banano";  con la variable let no se puede redeclarar una variable

//Ejemplos con Const

//const animal;  con la variable const se debe declarar e inicializar en la misma linea
const animal = "Dog";
//animal = "Cat"  con la variable const no se puede reasignar
console.log(animal);
//const animal = "Snake"; ni mucho menos redeclarar

const vehicles = [];  //cuando se utilizan arrays con const si se pueden utilizar sus metodos de agregar y eliminar elementos.
vehicles.push("toyota");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);