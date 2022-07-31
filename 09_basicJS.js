/*Esplorare le differenze tra le parole chiave var e let
Uno dei maggiori problemi quando si dichiarano delle variabili con la parola chiave var è che è possibile sovrascrivere facilmente le dichiarazioni delle variabili:

var camper = "James";
var camper = "David";
console.log(camper);
Nel codice qui sopra, la variabile camper è originariamente dichiarata come James per poi essere sovrascritta con David. La console poi mostra la stringa David.

In una piccola applicazione, potresti non incorrere in questo tipo di problema. Ma man mano che il tuo codebase diventa più grande potresti accidentalmente sovrascrivere una variabile che non intendevi sovrascrivere. Poiché questo comportamento non da errore, cercare e sistemare bug diventa più difficile.

Una parola chiave chiamata let è stata introdotta in ES6, un aggiornamento importante a JavaScript, per risolvere questo potenziale problema con la parola chiave var. Imparerai altre caratteristiche di ES6 in sfide future.

Se sostituisci var con let nel codice qua sopra, risulta in un errore:

let camper = "James";
let camper = "David";
L'errore può essere visto nella console del browser.

Quindi a differenza di var, quando usi let, una variabile con lo stesso nome può essere dichiarata una sola volta.

Aggiorna il codice in modo che utilizzi solo la parola chiave let. */
let catName = "Oliver";
let catSound = "Meow!";