'use strict';

// chiedo all’utente il numero di chilometri che vuole percorrere

const kmPreferiti = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
console.log(kmPreferiti);

// chiedo all'utente la sua età

const etaUtente = parseInt(prompt('Inserisci la tua età'));
console.log(etaUtente);

// creo variabile che è risultato tra kmPreferiti e la tariffa di 0,21€ al km

let prezzoBiglietto = kmPreferiti * 0.21;


// dal risultato del prezzo applico i vari sconti in base all'età

if(etaUtente < 18) { 
    document.querySelector('h1').innerHTML = 'Il prezzo del tuo biglietto è di ' + (prezzoBiglietto - (prezzoBiglietto / 100 * 20)).toFixed(2) + '€';
    console.log('Il prezzo del tuo biglietto è di ' + (prezzoBiglietto - (prezzoBiglietto / 100 * 20)).toFixed(2) + '€');    
} else if(etaUtente > 65) {
    document.querySelector('h1').innerHTML = 'Il prezzo del tuo biglietto è di ' + (prezzoBiglietto - (prezzoBiglietto / 100 * 40)).toFixed(2) + '€';
    console.log('Il prezzo del tuo biglietto è di ' + (prezzoBiglietto - (prezzoBiglietto / 100 * 40)).toFixed(2) + '€');
} else {
    document.querySelector('h1').innerHTML = 'Il prezzo del tuo biglietto è di ' + prezzoBiglietto.toFixed(2) + '€';
    console.log('Il prezzo del tuo biglietto è di ' + prezzoBiglietto.toFixed(2) + '€');
}

// NOTE PERSONALI: per mettere i 2 numeri dopo la virgola ho scritto .toFixed(2) dopo le variabili ricavate. Penso di aver trovato altre soluzioni su internet ma penso anche di non averle capite.