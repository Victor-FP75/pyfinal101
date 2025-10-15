//Elementos del DOM (Document object model) - Elementos del documento
//seleccionamos un elemento a través de su ID
const inputElement = document.getElementById("miDatoAleatorio");
const inputElementElegido1 = document.getElementById("miDatoElegido1");
const inputElementElegido2 = document.getElementById("miDatoElegido2");
const inputElementElegido3 = document.getElementById("miDatoElegido3");

//Asigno el objeto botón a una variable, para manipularlo dede javascript.
const buttonElement = document.getElementById("bntAceptar");

//Creo una funcion para el botón, para ejecutar el contenido
//Agrego un evento Click al botón, para ejecutar el contenido
buttonElement.addEventListener("click", () => {
    let numAleatorio = Math.floor(Math.random() * 10 + 1);
    inputElement.value = numAleatorio;
    console.log("Número aleatorio generado:", numAleatorio);

    let intento = 1;
    inputElementElegido1.value = 0;
    inputElementElegido2.value = 0;
    inputElementElegido3.value = 0;


    while (intento <= 3) {
        let entrada = prompt("Ingresa un número entre 1 y 10");
        if (entrada === null) {
            alert("Juego cancelado.");
            break;
        }

        let numElegido = Number(entrada);

        if (numElegido >= 1 && numElegido <= 10) {
            alert(`Intento #${intento}: Número ingresado: ${numElegido}`);

            // Mostrar el valor en los inputs correspondientes
            if (intento === 1) inputElementElegido1.value = numElegido;
            if (intento === 2) inputElementElegido2.value = numElegido;
            if (intento === 3) inputElementElegido3.value = numElegido;

            if (numElegido === numAleatorio) {
                alert("¡Felicitaciones, has ganado!");
                break;
            } else {
                if (Math.abs(numElegido - numAleatorio) === 1) {
                    alert("Estuviste muy cerca...");
                } else {
                    alert("Muy alejado de la meta...");
                }
            }
        } else {
            alert("El número debe estar en el rango de 1 a 10.");
        }

        intento++;
    }

    if (intento > 3) {
        alert(`Se acabaron los intentos. El número correcto era: ${numAleatorio}`);
    }
});



/*

//Elementos del DOM
const inputElement = document.getElementById("miDatoAleatorio");
const inputElementElegido1 = document.getElementById("miDatoElegido1");
const inputElementElegido2 = document.getElementById("miDatoElegido2");
const inputElementElegido3 = document.getElementById("miDatoElegido3");

const buttonElement = document.getElementById("bntAceptar");
let intento = 1;

//Genera un número al azar entre 0 y 1
let numAleatorio = Math.floor(Math.random() * 10 + 1);  //floor, hace un redonde por defecto
console.log(numAleatorio);

inputElement.value = numAleatorio;

while (intento <= 4) {
    let numElegido = Number(prompt("Ingresa un número entre 1 al 10"));
    if (intento == 1) {
        inputElementElegido1.value = numElegido;
        //continue;
    }

    if (intento == 2) {
        inputElementElegido2.value = numElegido;
        //continue;
    }

    if (intento == 3) {
        inputElementElegido3.value = numElegido;
        //break;
    }

    if (numElegido > 0 && numElegido <= 10) {
        alert("Correcto, vamos a jugar!!!. Intento #: " + intento);
        if (numElegido == numAleatorio) {
            alert("Felicitaciones, ha ganado!!!...");
            break;
        } else {
            if (numElegido < numAleatorio - 1 && numElegido > numAleatorio + 1) {
                alert("Estuviste muy cerca...");
            } else {
                alert("Muy alejado de la meta...");
            }
        }
    } else { alert("El número debe estar en el rando de [0..10]!!..."); }

    intento++;
}


/*
switch (numElegido)
        {
            case (numElegido < numAleatorio):
                alert("Número elegido MENOR al número aleatorio!");
                break;
            case (numElegido > numAleatorio):
                alert("Número elegido MAYOR al número aleatorio!");
                break;
            case (numElegido == numAleatorio):
                alert("FELICITACIONES!!!. Número adivinado")
                break;
        }


//}
//} else {
*/
