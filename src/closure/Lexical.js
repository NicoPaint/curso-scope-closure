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