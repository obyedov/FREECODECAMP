/*Dichiarare una variabile di sola lettura con la parola chiave const
La parola chiave let non è l'unico nuovo modo per dichiarare le variabili. In ES6, puoi anche dichiarare variabili usando la parola chiave const.

const ha tutte le fantastiche caratteristiche che ha let, con il valore aggiunto che le variabili dichiarate utilizzando const sono di sola lettura. Esse sono un valore costante, il che significa che una volta assegnata una variabile con const, non può più essere riassegnata:

const FAV_PET = "Cats";
FAV_PET = "Dogs";
La console mostrerà un errore a causa della riassegnazione del valore di FAV_PET.

Dovresti sempre dichiarare le variabili che non vuoi riassegnare usando la parola chiave const. Questo aiuta quando nel caso dovessi tentare accidentalmente di riassegnare il valore a una variabile che è destinata a rimanere costante.

Nota: È pratica comune per gli sviluppatori usare identificatori di variabili a lettere maiuscole per valori immutabili e a lettere minuscole o camelCase per valori mutabili (oggetti e array). Imparerai di più su oggetti, array, e valori mutabili e immutabili in sfide future. In sfide future vedrai esempi di identificatori di variavile in maiuscolo, minuscolo e camelCase.

Modifica il codice in modo che tutte le variabili siano dichiarate utilizzando let o const. Usa let quando vuoi che la variabile possa cambiare e const quando vuoi che la variabile rimanga costante. Inoltre, rinomina le variabili dichiarate con const per conformarti alle pratiche comuni. Non cambiare la stringa assegnata alla variabile. */
const FCC = "freeCodeCamp"; // Modifica questa riga
let fact = "is cool!"; // Modifica questa riga
fact = "is awesome!";
console.log(FCC, fact); // Modifica questa riga