/*
    arreglos
*/
const comidas =['pozole', 'quesadillas','tacos']

/*
lenght
*/
console.log(comidas.length);

/*
    push     AGREGAR UN NUEVO ELEMENTO AL FINAL DEL ARREGLO
    pop      retirar el ultimo elemto de un arreglo
    unshift  agregar un elemento al inicio del arreglo
    shift    elimina el promer valor de el arreglo.
   
*/

comidas.push('Torta');
console.log('comidas');
comidas.unshift('Pancita');
console.log('comidas');
comidas.pop

comidas.forEach(function(el){ // se utiliza para aignar una funcion que se le 
    console.log(el);
})

const numeros = [1,4,7,8]; // lo que haces lo aplica a cada elemento del arreglo
console.log(numeros);

numeros.forEach(function (el) {
    let suma = el + 1;
    console.log(suma);
})
console.log(numeros);

// ejercicio
const arr = [];

function suma (num){
    let sumNum = num + 1;
    return arr.unshift(sumNum);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);

console.log(arr);