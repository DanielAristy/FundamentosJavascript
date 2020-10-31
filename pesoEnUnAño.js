var persona = {
    nombre: "Daniel",
    apellido: "Aristizabal",
    edad: 26,
    peso: 75
}

console.log(`Al inicio de este año ${persona.nombre} pesó ${persona.peso}kg!`)

const DIAS_DEL_ANIO = 365, INCREMENTO_PESO = 0.2

const incrementoDePeso = (persona) => persona.peso += INCREMENTO_PESO
const decremento = (persona) => persona.peso -= INCREMENTO_PESO
for (var i = 1; i < DIAS_DEL_ANIO; i++) {
    var random = Math.random()

    if (random < 0.25){
        incrementoDePeso(persona)
    }else if (random < 0.5){
        decremento(persona)
    }
}

console.log(`Al fin de este año ${persona.nombre} pesó ${persona.peso.toFixed(2)}kg!`)

/**
 * 
 */