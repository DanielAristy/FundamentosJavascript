var daniel = {
    nombre: 'Daniel',
    apellido: 'Aristizabal',
    altura: 1.80,
    cantidadDeLibros: 63
}

var jose = {
    nombre: 'Jose',
    apellido: 'Giraldo',
    altura: 1.63,
    cantidadDeLibros: 15
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Perez',
    altura: 1.50,
    cantidadDeLibros: 12
}

var juan = {
    nombre: 'Juan',
    apellido: 'Velasquez',
    altura: 1.70,
    cantidadDeLibros: 13
}

var personas = [daniel, jose, pedro, juan]

for (const persona of personas) {
    console.log(`${persona.nombre} ${persona.apellido}`) 
}

// var personasAltas = personas.filter(function (persona) {
//     return persona.altura > 1.65
// })

// Filter
const esAlta = persona => persona.altura > 1.65
var personasAltas = personas.filter(esAlta)
console.log(personasAltas)

/**Map nos devuelve siempre un nuevo array
 * Pasar la altura de las personas a CMS
 * Se crea un nuevo objeto, para no modificar
 * la lista original 
 */  
const pasarAlturaACms = persona => ({
    ...persona,
        altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)
console.log(personasCms)

/**Reduce
 * Cantidad de libros entre todas las personas 
 */

// const reducer = (contador, persona) => {
//     return contador + persona.cantidadDeLibros
// }
const reducer = (contador, {cantidadDeLibros}) => contador + cantidadDeLibros

 var cantidadDeLibros = personas.reduce(reducer, 0)
 console.log(`En total todas las personas tiene ${cantidadDeLibros} Libros!`)
