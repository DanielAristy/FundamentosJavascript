
var persona = {
    nombre: "Daniel",
    apellido: "Aristizabal",
    edad: 17
};

const MAYORIA_DE_EDAD = 18
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

const ACCESO_DENEGADO = 'Acceso Denegado!', ACCESO_PERMITIDO = 'Acceso permitido!'
const ES_MAYOR_DE_EDAD = 'Es mayor de edad!', ES_MENOR_DE_EDAD = 'Es menor de edad!'

const imprimirSiEsMayorDeEdad = ({ edad }) => console.log(
    esMayorDeEdad(({ edad })) ? ES_MAYOR_DE_EDAD : ES_MENOR_DE_EDAD 
) 

const permitirAcceso = ({ edad }) => console.log(
    !esMayorDeEdad({edad}) ? ACCESO_DENEGADO : ACCESO_PERMITIDO
)

imprimirSiEsMayorDeEdad(persona)
permitirAcceso(persona)

/* funcion equivalente al Arrow function
function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

Arrow function
const esMayorDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
}

const esMayorDeEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {

    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad!`)
    }else {
        console.log(`${persona.nombre} es menor de edad!`)
    }
}*/