// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function ej1(num) {
  if (num % 2 === 0) {
    console.log("El numero que ingresaste es par");
  } else {
    console.log("El numero que ignresaste es impar");
  }
}

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function ej2(num1, num2) {
  if (num1 > num2) {
    console.log("El", num1, "es mayor");
  } else if (num2 > num1) {
    console.log("El", num2, "es mayor");
  } else {
    console.log("Los numeros son iguales");
  }
}

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function ej3(num) {
  if (num % 5 === 0) {
    console.log(`el ${num} es multiplo de 5`);
  } else {
    console.log(`El ${num} no es multiplo de 5`);
  }
}

// ej3(15);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function ej4(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

// ej4(7);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function ej5(palabra, numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(palabra);
  }
}

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const array = [3, 6, 9, 12, 16];

function ej6(array) {
  for (let i = 0; i <= array.length; i++) {
    console.log(array[i]);
  }
}

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ej7(array2) {
  for (let i = 0; i <= array2.length; i++) {
    if (i !== 4) {
      console.log(array2[i]);
    }
  }
}

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const array3 = [4, 2, 7, 9, 3];

function ej8(array3, numero) {
  for (let i = 0; i <= array3.length; i++) {
    console.log(array3[i] * numero);
  }
}

// ej8(array3, 2);
