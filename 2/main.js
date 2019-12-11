// Creo gli array con lo stesso numero di elementi
var array_uno = [];
var array_due = [];
var array_fusione = [];
var lunghezza_array  = 10;

// Creo i due array con elementi random
for (i=0; i<lunghezza_array; i++) {
    // Riempio il primo array con un carattere
    array_uno.push(generaCarattere(97, 122));
    // Riempio ilsecondo array con un numero
    array_due.push(generaNumero(1, 10));
}



console.log('Array di caratteri');
console.log(array_uno);
console.log('Array di numeri');
console.log(array_due);
array_fusione = fusioneArray(array_uno, array_due, lunghezza_array);
console.log('Array fusione');
console.log(array_fusione);

// Funzione che fonde i due array con elementi presi alternativamente dagli stessi
function fusioneArray(primoarray, secondoarray, lunghezza_array) {
    for (var i = 0; i < lunghezza_array; i++) {
        // Inserisco nell'array fusione un elmeento del primo array e uno del secondo e ciclo
        array_fusione.push(primoarray[i], secondoarray[i]);
    }
    return array_fusione;
}

// Funzione che fonde i due array con lunghezze diverse con elementi presi alternativamente dagli stessi
function fusioneArraydiversi(array_uno, array_due, lunghezza_array_uno,  lunghezza_array_due) {
    i = 0;
    j = 0;
    // Ciclo entrambi gli array iniziali
    while (i < lunghezza_array_uno && j < lunghezza_array_due)
    {
        array_fusione.push(array_uno[i], array_due[i]);
    }
    // Inserisco nell'array fusione i rimanenti elementi del primo array
    while (i < lunghezza_array_uno) {
        array_fusione.push(array_uno[i]);
    }
    // Inserisco nell'array fusione i rimanenti elementi del secondo array
    while (j < lunghezza_array_due) {
        array_fusione.push(array_uno[i]);
    }
    return array_fusione;
}

// Funzione che genera un numero casuale
function generaRAndom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Funzione che genera un carattere randomico compreso tra a e z utilizzando i caratteri ascii
// Il codice ASCII dalla A dalla Z è 97 a 122. Quindi, la logica sarà quella di selezionare il codice ASCII casuale da 97 a 122 e creare un carattere casuale
function generaCarattere(min, max){
    var random_ascii;
    random_ascii = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Trasformo il numero random nel corrispondente carattere ascii e lo restituisco
    return String.fromCharCode(random_ascii)
}
