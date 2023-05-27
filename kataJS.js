// 1
document.addEventListener("DOMContentLoaded",
    function () {
        console.log("¡Hola Mundo!");
    }
)

// 10
function hiMyself() {
    var name = prompt("Escriba su nombre");
    console.log("Hola ¡" + name + "!");
}

// 11
function doubleOneNumber() {

    var number = prompt("Write a number to doble");
    var result = number * 2;
    console.log(result);

}

// 100
function sumTwoNumber() {

    var numberA = prompt("Escriba un número:");
    var numberB = prompt("Escriba otro número:");
    var result = parseInt(numberA) + parseInt(numberB);
    console.log(result);

}

// 101
function halfOfANumber() {

    var number = prompt("Write a number to return half:");
    var result = parseFloat(number) / 2;
    console.log(result);

}

// 110
function returnTheLargestNumber() {
    var numberA = prompt("Write a number");
    var numberB = prompt("Write another number");

    if (parseFloat(numberA) > parseFloat(numberB)) {
        console.log("El número mayor es: " + numberA);
    } else {
        console.log("El número mayor es: " + numberB);
    }
}

// 111
function returnTheLargestNumberTheTreeNumber() {

    var numberA = prompt("Write a number 1");
    var numberB = prompt("Write the number 2");
    var numberC = prompt("Write the number 3");

    if (parseFloat(numberA) > parseFloat(numberB) && parseFloat(numberA) > parseFloat(numberC)) {
        console.log("El número mayor es: " + numberA);
    } else if (parseFloat(numberB) > parseFloat(numberA) && parseFloat(numberB) > parseFloat(numberC)) {
        console.log("El número mayor es: " + numberB);
    } else {
        console.log("El número mayor es: " + numberC);
    }

}

// 1000
function twoNumberCheckIfTheyAreTheSame() {
    var numberA = prompt("Write a number: ");
    var numberB = prompt("Write another number: ");

    if (parseFloat(numberA) == parseFloat(numberB)) {
        console.log("Números iguales.");
    } else {
        console.log("Los números no so iguales");
    }
}

// 1001
function twoNamesCheckIfTheyAreTheSame() {
    var nameA = prompt("Write a name: ");
    var nameB = prompt("Write another name: ");

    if (nameA == nameB) {
        console.log("Nombres iguales");
    } else {
        console.log("Los nombres no son iguales");
    }
}

// 1010
function twoNumberPositiveOrNegative() {

    var numberA = prompt("Writer a number");
    var numberB = prompt("Writer another number");

    if (Math.sign(parseFloat(numberA)) == 1 && Math.sign(parseFloat(numberB)) == 1 || Math.sign(parseFloat(numberA)) == -1 && Math.sign(parseFloat(numberB)) == -1) {
        return true;
    } else if (Math.sign(parseFloat(numberA)) == 0 && Math.sign(parseFloat(numberB)) == 0) {
        console.log("Son números neutros");
    } else if (Math.sign(parseFloat(numberA)) == -0 && Math.sign(parseFloat(numberB)) == -0) {
        console.log("Son números neutros");
    } else {
        return false;
    }
}

// 1011
function twoNumberPositiveYNegative() {

    var numberA = prompt("Writer a number");
    var numberB = prompt("Writer another number");

    if (Math.sign(parseFloat(numberA)) == 1 && Math.sign(parseFloat(numberB)) == -1 || Math.sign(parseFloat(numberA)) == -1 && Math.sign(parseFloat(numberB)) == 1) {
        return true;
    } else if (Math.sign(parseFloat(numberA)) == 0 && Math.sign(parseFloat(numberB)) == 0) {
        console.log("Son números neutros");
    } else if (Math.sign(parseFloat(numberA)) == -0 && Math.sign(parseFloat(numberB)) == -0) {
        console.log("Son números neutros");
    } else {
        return false;
    }
}

// 1100
function tenNumberReturnTheLargest() {

    var result = 0;

    for (var i = 0; i < 10; i++) {
        var numberWritten = prompt("Write a number: ");
        if (parseFloat(numberWritten) > result)
            result = numberWritten;
    }
    console.log("The largest number  is: " + result);
}

// 1101
function nameCharacters() {

    var myName = prompt("Write you name: ");

    console.log("¡Hola " + myName + "!");
    console.log("My name has: " + myName.length + " characters");

}

// 1110
function arrayTenName() {

    let numberNombre = prompt("Type the number of name to enter: ");
    let result = [];

    for (let i = 0; i < numberNombre; i++) {
        result[i] = prompt("Write the name " + (i + 1) + " : ").toLowerCase();
    }
    console.log(result.sort());

}

//11111

function arrayTenNumber() {
    let number = prompt("Type the number of numbers to enter: ");
    let result = [];

    for (let i = 0; i < number; i++) {
        numberNegative = prompt("Write the number " + (i + 1) + " : ")
        if (parseInt(numberNegative) < 0) {
            result[i] = numberNegative;
        }
    }
    console.log(result);
}

//100000

function xName() {

    let cont = 0;
    let nombre = [];
    let result;


    for (let i = 0; i <= cont; i++) {

        if (cont > 0) {

            if (result == true) {

                for (let i = 1; i <= cont; i++) {

                    nombre[i] = prompt("Write a name");

                    if (nombre[i] == null) {

                        return console.log("Haz ingresado : " + (nombre.length - 1)+ " nombres");

                    } else {

                        result = window.confirm("¿Deseas añadir un nombre?");

                        if (result == false) {

                            return console.log("Haz ingresado : " + nombre.length + " nombres");

                        } else {

                            cont++;

                        }

                    }

                }

            }

        } else {

            nombre[i] = prompt("Write a name");

            if (nombre[i] == null) {

                return console.log("Haz ingresado : " + (nombre.length - 1)+ " nombres");

            } else {

                result = window.confirm("¿Deseas añadir un nombre?");

                if (result == false) {

                    return console.log("Haz ingresado : " + nombre.length + " nombres");

                } else {

                    cont++;

                }

            }


        }

    }

}

//10001
