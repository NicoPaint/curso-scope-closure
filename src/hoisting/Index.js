console.log(nameOfDog); //undefined
var nameOfDog = "Elmo";
console.log(nameOfDog); //Elmo

nameOfCat();

function nameOfCat(){
    console.log(Kitty); //undefined
}

var Kitty = "Elmito";

//el hoisting pone la declaracion de las variables var antes para declararlas undefined y realiza el mismo proceso de elevacion con las funciones