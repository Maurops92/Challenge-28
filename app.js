// Realizar una calculadora simple que incluya suma, resta, multiplicación y división.

let salir = true;
document.write(`<h1>La calculadora</h1><br>`)

while (salir == true) {
    alert("Bienvenido a la calculadora");
    alert("Ingrese 1 para sumar, 2 para restar, 3 para multiplicar , 4 para dividir o 5 para salir");
    let calculo = parseInt(prompt("Ingrese la operacion que desea hacer"));

    if (isNaN(calculo) || calculo > 5 || calculo < 1) {
        alert("Ingrese una de las opciones validas.");

    } else if (calculo == 5) {
        alert(`Usted salio de la calculadora`);
        salir = false;
    } else {
        let num1 = parseInt(prompt("Ingrese el primer numero"));
        let num2 = parseInt(prompt("Ingrese el segundo numero"));

        while (isNaN(num1) || isNaN(num2)) {
            alert("Ingrese solo numeros");
            num1 = parseInt(prompt("Ingrese el primer numero"));
            num2 = parseInt(prompt("Ingrese el segundo numero"));
        }
        switch (calculo) {

            case 1:
                alert(`Los numeros ingresados son ${num1} y ${num2}`);
                alert(`La suma de los numero es ${num1 + num2}`);
                break;
            case 2:
                alert(`Los numeros ingresados son ${num1} y ${num2}`);
                alert(`La resta de los numero es ${num1 - num2}`);
                break;
            case 3:
                alert(`Los numeros ingresados son ${num1} y ${num2}`);
                alert(`La multiplicacion de los numero es ${num1 * num2}`);
                break;
            default:
                alert(`Los numeros ingresados son ${num1} y ${num2}`);
                alert(`La división de los numero es ${num1 / num2}`);
                break;

        }
    }
}
