const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();

//el anbito lexico significa que la accesibilidad de las variables estan determinadas por la posicion de las mismas dentro de los ambitos anidados que en este ejemplo son las funciones

function sumWithClosure(firstNum) {
    // Tu código aquí 👈
    let acumulador = 0;
  
    return function suma() {
      acumulador = acumulador + firstNum;
      return acumulador;
    }
}

const suma1 = sumWithClosure(2); //suma1 es igual a una funcion
console.log(suma1());

function sumWithClosure(firstNum) {
    // Tu código aquí 👈
    let acumulador = 0;
  
    function suma() {
        acumulador = acumulador + firstNum;
        return acumulador;
    }

    return suma();
}

const suma2 = sumWithClosure(2); //suma2 es igual al dato que regresa la funcion suma
console.log(suma2);

function crearContador(){
    let contador = 0;

    return function incrementar(){
        contador = contador + 1;
        return contador;
    }
}

const contador1 = crearContador();
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());

function crearContador(){
    let contador = 0;

    function incrementar(){
        contador = contador + 1;
        return contador;
    }

    return incrementar();
}

const contador2 = crearContador();
console.log(contador2);
console.log(contador2);
console.log(contador2);
console.log(contador2);
console.log(contador2);


//esta es una respuesta posible para el desafio de codigo del closure para sumar
function sumWithClosure(firstNum) {
    // Tu código aquí 👈
    return function suma(secondNum) {
      if (secondNum) {
        return firstNum + secondNum;
      }
  
      return firstNum;
    }
}