//Function Scope

function greeting(){
    let username = "Ana"; //como esta variable se definio dentro de esta funcion solo puede ser accedida dentro de la misma y funciones anidadas como en este ejemplo el IF.
    console.log(username);

    if(username === "Ana"){
        console.log(`Hello ${username}!`);
    }
}

greeting();
console.log(username); //esta linea arrojara un error debido a que la variable username no ha sido definida como variable global.