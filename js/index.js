/*
Agostina Rosano
Camada 2390
Trabajo Práctico Clase 3
# Mejorar la calculadora seprando en funciones cada operacione
​- Debera poder ingresar 2 valores
- Debera poder ingresar que operacion quiere realizar
- Cada operacion tendra que ser una funcion con los 2 paramentros para sumar, restar, multiplicar o dividir;
- Debera mostrar el resultado de la operacion en consola
*/

var valorUno = Number(prompt('Ingrese un valor'))
var valorDos = Number(prompt ('Ingese otro valor'))
var arrayOperaciones = ["sumar","restar","multiplicar","dividir"]
var operacion = prompt('Inserte una operacion')
var calculadora = function(operador, parametro) {
    var operador = operacion
    var parametro = arrayOperaciones
    if (operador === arrayOperaciones[0]){
        console.log(valorUno + valorDos)
        return valorUno + valorDos
    }
    else if (operador === arrayOperaciones[1]){
        console.log(valorUno - valorDos)
        return valorUno - valorDos
    }
    else if (operador === arrayOperaciones[2]){
        console.log(valorUno * valorDos)
        return valorUno * valorDos
    }
    else {
        console.log(valorUno / valorDos)
        return valorUno / valorDos
    }
}
calculadora(valorUno,valorDos)