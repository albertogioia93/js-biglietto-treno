'use strict';

// chiedo all’utente il numero di chilometri che vuole percorrere

const kmPreferiti = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
console.log(kmPreferiti);

// chiedo all'utente la sua età

const etaUtente = parseInt(prompt('Inserisci la tua età'));
console.log(etaUtente);

// creo variabile che è risultato tra kmPreferiti e la tariffa di 0,21€ al km

let prezzoBiglietto = kmPreferiti * 0,21;
console.log(prezzoBiglietto);