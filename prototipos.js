class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        // var nombre = this.nombre
        // var apellido = this.apellido
        var { nombre, apellido } =  this
        console.log(`Hola mi nombre es ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }

    soyAlto(){
        return this.altura >=  1.70
    }
}

class Desarrollador extends Persona  {
    constructor (nombre, apellido, altura){
        super(nombre,apellido, altura)
    }
    saludar(fn){
        var { nombre, apellido } =  this
        console.log(`Hola, me lamo ${nombre} ${apellido}, y soy Desarrollador/a`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)

    if(esDev){
        console.log(`No sabía que eras desarrollador/a `)
    }
}
/**Arrow function
 * Estas funciones no son muy recomendables 
 * con prototipos ya que como vemos en el 
 * ejemplo comentando el this apunta a window 
 * con el que estamos trabajando, entonces ocurre
 * un error cada vez que queremos acceder a este
 * objeto
 */
// Persona.prototype.soyAlto = () => this.altura >=  1.70

var daniel = new Desarrollador('Daniel', 'Gomez', 1.80)
var jose = new Persona('Jose', 'Ramirez', 1.65)
var erick = new Persona('Erick', 'Hedai', 1.70)

daniel.saludar(responderSaludo)
jose.saludar(responderSaludo)
erick.saludar(responderSaludo)
