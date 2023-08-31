//enlace BTN HTML
const btn1thml = document.getElementById("btn1");
const btn2thml = document.getElementById("btn2");
const btn3thml = document.getElementById("btn3");
const btn4thml = document.getElementById("btn4");
const btn5thml = document.getElementById("btn5");
const btn6thml = document.getElementById("btn6");
const btn7thml = document.getElementById("btn7");
const btn8thml = document.getElementById("btn8");

//enlace btn ejercicio letras y numeros
const btnA1 = document.getElementById("btnA1");
const btnB2 = document.getElementById("btnB2");
const btnC3 = document.getElementById("btnC3");
const btnD4 = document.getElementById("btnD4");
const btnE5 = document.getElementById("btnE5");
const btnF6 = document.getElementById("btnF6");
const btnG7 = document.getElementById("btnG7");
const btnH8 = document.getElementById("btnH8");
const btnI9 = document.getElementById("btnI9");
const btnCL = document.getElementById("btncL");
const btnJ0 = document.getElementById("btnJ0");
const btnCN = document.getElementById("btncN");

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

//ejercicio letras y numeros

let letras = [];
let numeros = [];
let letrasTotal = "";
let numerosTotal = "";
const letrasInput = document.getElementById("letras");
const numerosInput = document.getElementById("numeros");
const errorHtml = document.getElementById("error");

function botonUno() {
  if (letras.length === 0) {
    letras.push("A");
    letras.forEach((e) => {
      letrasTotal += e;
    });
    letrasInput.value = letrasTotal;
  } else {
    if (letras.length === 10 && numeros.length === 0) {
      numeros.push("1");
      numeros.forEach((e) => {
        numerosTotal += e;
      });
      numerosInput.value = numerosTotal;
    } else {
      errorHtml.innerHTML = "Btn errado - Sigue la secuencia";
      setTimeout(() => {
        errorHtml.innerHTML = "";
      }, 3000);
    }
  }
}

function botonDos() {
  if (letras.length === 1) {
    letras.push("B");
    letrasTotal = "";
    letras.forEach((e) => {
      letrasTotal += e;
    });
    letrasInput.value = letrasTotal;
  } else {
    if (letras.length === 10 && numeros.length === 1) {
      numeros.push("2");
      numerosTotal=""
      numeros.forEach((e) => {
        numerosTotal += e;
      });
      numerosInput.value = numerosTotal;
    } else {
      errorHtml.innerHTML = "Btn errado - Sigue la secuencia";
      setTimeout(() => {
        errorHtml.innerHTML = "";
      }, 3000);
    }
  }
}
function botonTres() {
  if (letras.length === 2) {
    letras.push("C");
    letrasTotal = "";
    letras.forEach((e) => {
      letrasTotal += e;
    });
    letrasInput.value = letrasTotal;
  } else {
    if (letras.length === 10 && numeros.length === 2) {
      numeros.push("3");
      numerosTotal=""
      numeros.forEach((e) => {
        numerosTotal += e;
      });
      numerosInput.value = numerosTotal;
    } else {
      errorHtml.innerHTML = "Btn errado - Sigue la secuencia";
      setTimeout(() => {
        errorHtml.innerHTML = "";
      }, 3000);
    }
  }
}
function botonCuatro() {
  if (letras.length === 3) {
    letras.push("D");
    letrasTotal = "";
    letras.forEach((e) => {
      letrasTotal += e;
    });
    letrasInput.value = letrasTotal;
  } else {
    if (letras.length === 10 && numeros.length === 3) {
      numeros.push("4");
      numerosTotal=""
      numeros.forEach((e) => {
        numerosTotal += e;
      });
      numerosInput.value = numerosTotal;
    } else {
      errorHtml.innerHTML = "Btn errado - Sigue la secuencia";
      setTimeout(() => {
        errorHtml.innerHTML = "";
      }, 3000);
    }
  }
}
function botonCinco() {
  if (letras.length === 4) {
    letras.push("E");
    letrasTotal = "";
    letras.forEach((e) => {
      letrasTotal += e;
    });
    letrasInput.value = letrasTotal;
  } else {
    if (letras.length === 10 && numeros.length === 4) {
      numeros.push("5");
      numerosTotal=""
      numeros.forEach((e) => {
        numerosTotal += e;
      });
      numerosInput.value = numerosTotal;
    } else {
      errorHtml.innerHTML = "Btn errado - Sigue la secuencia";
      setTimeout(() => {
        errorHtml.innerHTML = "";
      }, 3000);
    }
  }
}
function botonSeis() {
  if (letras.length === 5) {
    letras.push("F");
    letrasTotal = "";
    letras.forEach((e) => {
      letrasTotal += e;
    });
    letrasInput.value = letrasTotal;
  } else {
    if (letras.length === 10 && numeros.length === 5) {
      numeros.push("6");
      numerosTotal=""
      numeros.forEach((e) => {
        numerosTotal += e;
      });
      numerosInput.value = numerosTotal;
    } else {
      errorHtml.innerHTML = "Btn errado - Sigue la secuencia";
      setTimeout(() => {
        errorHtml.innerHTML = "";
      }, 3000);
    }
  }
}
function botonSiete() {
  if (letras.length === 6) {
    letras.push("G");
    letrasTotal = "";
    letras.forEach((e) => {
      letrasTotal += e;
    });
    letrasInput.value = letrasTotal;
  } else {
    if (letras.length === 10 && numeros.length === 6) {
      numeros.push("7");
      numerosTotal=""
      numeros.forEach((e) => {
        numerosTotal += e;
      });
      numerosInput.value = numerosTotal;
    } else {
      errorHtml.innerHTML = "Btn errado - Sigue la secuencia";
      setTimeout(() => {
        errorHtml.innerHTML = "";
      }, 3000);
    }
  }
}
function botonOcho() {
  if (letras.length === 7) {
    letras.push("H");
    letrasTotal = "";
    letras.forEach((e) => {
      letrasTotal += e;
    });
    letrasInput.value = letrasTotal;
  } else {
    if (letras.length === 10 && numeros.length === 7) {
      numeros.push("8");
      numerosTotal=""
      numeros.forEach((e) => {
        numerosTotal += e;
      });
      numerosInput.value = numerosTotal;
    } else {
      errorHtml.innerHTML = "Btn errado - Sigue la secuencia";
      setTimeout(() => {
        errorHtml.innerHTML = "";
      }, 3000);
    }
  }
}
function botonNueve() {
  if (letras.length === 8) {
    letras.push("I");
    letrasTotal = "";
    letras.forEach((e) => {
      letrasTotal += e;
    });
    letrasInput.value = letrasTotal;
  } else {
    if (letras.length === 10 && numeros.length === 8) {
      numeros.push("9");
      numerosTotal=""
      numeros.forEach((e) => {
        numerosTotal += e;
      });
      numerosInput.value = numerosTotal;
    } else {
      errorHtml.innerHTML = "Btn errado - Sigue la secuencia";
      setTimeout(() => {
        errorHtml.innerHTML = "";
      }, 3000);
    }
  }
}
function botonDiez() {
  if (letras.length === 9) {
    letras.push("J");
    letrasTotal = "";
    letras.forEach((e) => {
      letrasTotal += e;
    });
    letrasInput.value = letrasTotal;
  } else {
    if (letras.length === 10 && numeros.length === 9) {
      numeros.push("0");
      numerosTotal=""
      numeros.forEach((e) => {
        numerosTotal += e;
      });
      numerosInput.value = numerosTotal;
    } else {
      errorHtml.innerHTML = "Btn errado - Sigue la secuencia";
      setTimeout(() => {
        errorHtml.innerHTML = "";
      }, 3000);
    }
  }
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

//oncliks de letras y numeros

btnA1.onclick = function () {
  botonUno();
};
btnB2.onclick = function () {
  botonDos();
};
btnC3.onclick = function () {
  botonTres();
};
btnD4.onclick = function () {
  botonCuatro();
};
btnE5.onclick = function () {
  botonCinco();
};
btnF6.onclick = function () {
  botonSeis();
};
btnG7.onclick = function () {
  botonSiete();
};
btnH8.onclick = function () {
  botonOcho();
};
btnI9.onclick = function () {
  botonNueve();
};
btnJ0.onclick = function () {
  botonDiez();
};
btnCL.onclick = function () {
  letras = [];
  letrasTotal = "";
  letrasInput.value = "";
};
btnCN.onclick = function () {
  numeros = [];
  numerosTotal = "";
  numerosInput.value = "";
};
