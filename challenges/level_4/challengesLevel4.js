//enlace BTN HTML
const btn1thml = document.getElementById("btn1");
const btn2thml = document.getElementById("btn2");
const btn3thml = document.getElementById("btn3");
const btn4thml = document.getElementById("btn4");
const btn5thml = document.getElementById("btn5");
const btn6thml = document.getElementById("btn6");
const btn7thml = document.getElementById("btn7");
const btn8thml = document.getElementById("btn8");

// funciones de ejercicios
//Challenge 1
function challenge1() {
  const frutas = ["manzana", "banana", "cereza", "datil"];

  for (let i = 0; i < frutas.length; i++) {
    console.log("for " + frutas[i]);
  }
}

//Challenge 2
function challenge2() {
  const frutas = ["manzana", "banana", "cereza", "datil"];

  frutas.forEach((e) => {
    console.log("forEach " + e);
  });
}

//Challenge 3

function challenge3() {
  let opc = parseInt(prompt("Ingrese un numero de 1 a 4"));

  while (opc > 4 || opc < 1) {
    opc = parseInt(prompt("Ingrese un numero de 1 a 4"));
  }
  alert("Correcto opcion " + opc);
}

//Challenge 4

function challenge4() {
  const numeros = [45, 23, 67, 89, 12, 56];
  let numMax = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numMax < numeros[i]) {
      numMax = numeros[i];
      console.log("numero max: " + numMax);
    }
  }
  console.log("El numero mas grande es: " + numMax);
}

//Challenge 5
function challenge5() {
  const numeros = [2, 4, 6, 8, 10];
  let sumaNum = 0;

  numeros.forEach((e) => {
    sumaNum += e;
  });

  console.log("la suma de los numeros es: " + sumaNum);
}

//Challenge 6
function challenge6() {
  const numeros = [3, 7, 2, 8];
  let mulNumeros = [];
  let multiplicacion = 0;
  for (let i = 0; i < numeros.length; i++) {
    multiplicacion = numeros[i] * 2;
    console.log(multiplicacion);
    mulNumeros.push(multiplicacion);
  }
  console.log("el numero array es: " + mulNumeros);
}

//challenge 7

function challenge7() {
  const numeros = [1, 4, 7, 3, 10, 12];
  let suma = 0;
  numeros.forEach((e) => {
    if (e % 2 === 0) {
      suma += e;
    }
  });
  console.log("El valor de la suma de los numeros pares es :" + suma);
}

// challenge 8

function challenge8() {
  const numeros = [30, 45, 60, 72, 48, 10];
  let count = 0;
  while (numeros[count] <= 50) {
    count++;
  }
  alert("El primer numero mayor a 50 en el array es: " + numeros[count]);
}

// Funciones botones
btn1thml.onclick = function () {
  challenge1();
};
btn2thml.onclick = function () {
  challenge2();
};
btn3thml.onclick = function () {
  challenge3();
};
btn4thml.onclick = function () {
  challenge4();
};
btn5thml.onclick = function () {
  challenge5();
};
btn6thml.onclick = function () {
  challenge6();
};
btn7thml.onclick = function () {
  challenge7();
};
btn8thml.onclick = function () {
  challenge8();
};
