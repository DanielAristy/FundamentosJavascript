var persona = {
    nombre: "Daniel",
    apellido: "Aristizabal",
    edad: 26
}

function imprimirNombreYEdad(persona){

    var {nombre, apellido, edad } = persona

    console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años!`)
}

imprimirNombreYEdad(persona)


/**Creando objetos a partir de otros
 * copiando los datos del objeto anterior
*/

function cumpleaños(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}

