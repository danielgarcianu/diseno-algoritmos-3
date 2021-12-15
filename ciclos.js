//se usan para una tarea repetitivas o para no hacerla manualmente se usan ciclos bucles o loops 
/*
    while permite hacer una tarea repetitiva 
    do while 
    for
*/

/*
    while 
    let condicion = 1; valor inicial
    while(condicion){
        tu codigo
        modificacion a nuestro codigo inicial
    }
*/

// imprimir todos los numeros del 1 - 10

/*let condicion = 1;

while(condicion <= 10){
    console.log(condicion);
    //condicion = condicion + 1;
    condicion++;  //operador representa que vamos a sumar un 1 al valor de la izquierda
}*/

/*

let numero = 1;
numero++;
console.log(numero);
numero--;    // hace lo contrario resta 1 al valor de la izquierda.
console.log(numero); 
*/

// do while "imprimir los numeros del 1 -10"

/*let numero = 1;
do {
    console.log(numero); // do while ejecuta primero despues comprueba la condicion
    numero++;
} while (numero <= 10);*/


/* ciclo for *******************
    utiliza un contador para contar las iteraciones 
*/
for (let control = 1; control <= 10; control++){
    console.log(control);

}

const comidas = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];

for (let i = 0; i < comidas.length; i++){
    console.log(comidas[i]);
}


const numeros = [1,4,7,9,15,46,27,40,123];
const resultado = [];
for(let multiplicar = 0; multiplicar < numeros.length; multiplicar++){
    resultado.push(numeros[multiplicar]*2);
    console.log(resultado[multiplicar]);
}
console.log(resultado);
