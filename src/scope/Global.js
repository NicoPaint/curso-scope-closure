//Variables

var a; //declarando
var b = "b"; //declarando y asignando
b = "bb"; //reasignando
var a = "aa"; //redeclarando

//Global Scope

var fruit = "Apple"; //variable global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = "Colombia"; //al solo asignar una variable JS la toma como variable global sin importar que este escrita por primera vez en una funcion o bloque.
    console.log(country);
}

countries();
console.log(country);
