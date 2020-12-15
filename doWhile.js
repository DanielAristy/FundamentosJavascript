var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while (!llueve());

var frecuencia = contador === 1 ? "vez" : "veces";

console.log(`Fui a la esquina y estaba lloviendo ${contador} ${frecuencia}!`)