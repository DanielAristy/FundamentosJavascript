// Declarar variables
var nombre = 'Daniel', apellido = 'Aristizabal'

// Manejo de Strings

// Cambiar un nombre en Mayusculas
var nombreEnMayusculas = nombre.toUpperCase()

// Cambiar el nombre a minusculas
var apellidoEnMinusculas = apellido.toLowerCase()

// Funciones para encontrar un caracter en un String 
var primerLetraDelApellido = apellido.charAt(0)

//Cantidad de caracteres que tiene un String 
var cantidadDeLetrasDelApellido = apellido.length

//Extraer cierta cantidad de caracteres de un String
var caracteres = nombre.substr(2,nombre.length)

console.log(nombreEnMayusculas)
console.log(apellidoEnMinusculas)
console.log(primerLetraDelApellido)
console.log(cantidadDeLetrasDelApellido)
console.log(caracteres)

// Numeros

var precioGaseosa = 1000.3
var cantidadDeGaseosas = 4

// Redondear el número
var total = Math.round(precioGaseosa * cantidadDeGaseosas)

//Numero de decimales despues del punto
var cantidadDeDecimales =  (precioGaseosa * cantidadDeGaseosas).toFixed(2)

console.log(total)
console.log(cantidadDeDecimales)