// Ejercicio 1

function parImpar(num) {
  if (num % 2 === 0) {
    console.log("El numero que ingresaste es par");
  } else {
    console.log("El numero que ignresaste es impar");
  }
}

// Ejercicio 2

function mayorMenor(num1, num2) {
  if (num1 > num2) {
    console.log("El", num1, "es mayor");
  } else if (num2 > num1) {
    console.log("El", num2, "es mayor");
  } else {
    console.log("Los numeros son iguales");
  }
}

// Ejercicio 3

function multiplo5(num) {
  if (num % 5 === 0) {
    console.log("Es multiplo de 5");
  } else {
    console.log("no es multiplo de 5");
  }
}

// Ejercicio 4

function ej4(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

// Ejercicio 5

function ej5(palabra, numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(palabra);
  }
}

// Ejercicio 6

const array = [3, 6, 9, 12, 16];

function ej6(array) {
  for (let i = 0; i <= array.length; i++) {
    console.log(array[i]);
  }
}

// Ejercicio 7

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ej7(array2) {
  for (let i = 0; i <= array2.length; i++) {
    if (i !== 4) {
      console.log(array2[i]);
    }
  }
}
