function heredaDe(claseHija, clasePadre){
    var fn = function () {}
    fn.prototype = clasePadre.prototype
    claseHija.prototype = new fn
    claseHija.prototype.constructor = claseHija 
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function (){
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
}

function Desarrollador(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
}
heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function (){
    console.log(`Hola, me lamo ${this.nombre} ${this.apellido}, y soy Desarrollador/a`)
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

Persona.prototype.soyAlto = function(){
    return this.altura >=  1.70
}

var daniel = new Desarrollador('Daniel', 'Gomez', 1.80)
var jose = new Persona('Jose', 'Ramirez', 1.65)
var erick = new Persona('Erick', 'Hedai', 1.70)
