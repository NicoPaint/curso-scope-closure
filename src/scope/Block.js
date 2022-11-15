//Block Scope

function fruits(){
    if(true){
        var fruit1 = "Apple"; //Function scope
        let fruit2 = "Kiwi"; //Block scope
        const fruit3 = "Banana"; //Block scope
        console.log(fruit2);
        console.log(fruit3);
    }

    console.log(fruit1);
    //console.log(fruit2);  arrojan error
    //console.log(fruit3);  arrojan error
}

fruits();

//las variables let y const solo pueden ser accesidas en el bloque de codigo en el que fueron declaradas, en cambio la varible var puede ser accesida desde afuera dentro de la funcion en la que esta escrita.