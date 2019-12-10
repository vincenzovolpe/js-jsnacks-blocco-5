// Dichiaro le variabili
var array= [];
var array_finale = [];
var lunghezza_array;
var a;
var b;
// Chiedo da prompt la  lunghezza dell'array, a e b {
lunghezza_array = parseInt(prompt("Inserisci la lunghezza dell'array: "));
b = parseInt(prompt("Inserisci un numero casuale (massimo uguale a " + lunghezza_array + ")"));
a = parseInt(prompt("Inserisci un numero casuale (più piccolo di " + b + ")"));

for (var i = 0; i < lunghezza_array; i++) {
    array.push(generaNumero(1,50));
}

// Chiamo la funzione creaArray
creaArray(array, a, b);

console.log('Array iniziale');
console.log(array);
console.log('Array finale');
console.log(array_finale);


// Funzione che ritorna un array con i valori compresi tra la posizione a e b
function creaArray(array, a, b) {
    for (var i = a-1; i < b; i++) {
        array_finale.push(array[i]);
    }
}

// Funzione che genera un numero casuale
function generaNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
