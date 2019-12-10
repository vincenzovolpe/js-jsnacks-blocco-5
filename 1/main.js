// Creo un array che conterrà gli oggetti di tipo zucchina
var zucchine = [];
var zucchine_corte = [];
var zucchine_lunghe = [];

somma_peso_corte = 0;
somma_peso_lunghe = 0
// Ciclo per costruire un array di oggetti zucchine
for (i=0; i<10; i++) {
    // Carico l'oggetto nell'array che ha come proprietà le caratteristiche della zucchina
    zucchine.push(oggetto = {
        'varieta': "tipo-" + i, // Creo il la proprietà varieta con una stringa fissa in cui cambia il numero finale
        'peso': generaRandom(1,50), // Creo la propeietà peso con una funzione random
        'lunghezza': generaRandom(1,50) // Creo la propeietà larghezza con una funzione random
    });
    // Controllo se la lunghezza della zucchina è  minore di 15
    if (zucchine[i].lunghezza < 15) {
        // Metto la lunghezza della zucchina minore di 15 cm nell'array zucchine_corte
        zucchine_corte.push(zucchine[i].lunghezza);
        // Sommo il peso della della zucchina minore di 15 cm messa nell'array zucchine_corte
        somma_peso_corte += zucchine[i].peso;
    } else {
        // Metto la lunghezza della zucchina maggiore di 15 cm nell'array zucchine_corte
        zucchine_lunghe.push(zucchine[i].lunghezza);
        // Sommo il peso della della zucchina maggiore di 15 cm messa nell'array zucchine_corte
        somma_peso_lunghe += zucchine[i].peso;
    }
}
console.log('Array di oggetti zucchine');
console.log(zucchine);
console.log('Array zucchine con lunghezzza minore di 15 cm');
console.log(zucchine_corte);
console.log('Array zucchine con lunghezzza maggiore di 15 cm');
console.log(zucchine_lunghe);
console.log('Il peso totale delle zucchine con lunghezza minore di 15 cm è: ' + somma_peso_corte);
console.log('Il peso totale delle zucchine con lunghezza maggiore di 15 cm è: ' + somma_peso_lunghe);

function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
