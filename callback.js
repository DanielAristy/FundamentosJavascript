const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const OPTS = { crossDomain: true };

const onReponse = function(object){
    console.log(`Hola soy ${object.name}`);
}

function obtenerPersonaje(id){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(URL,OPTS, onReponse);
}

obtenerPersonaje(4)