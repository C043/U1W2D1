/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quando ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I tre principali datatype in JavaScript sono: numeri, stringhe e boolean
- I numeri possono essere interi o decimali
- Le stringhe sono circondate da virgolette e dentro possono esserci lettere, spazi, alcuni simboli ma anche numeri
- I boolean invece sono due, true o false, vero o falso, quindi se qualcosa è vera o falsa. (Inoltre se si prova a sommare un numero con un boolean true, si scoprirà che true vale 1)
- Undefined invece è quando si dichiara una variabile ma non le si da un valore, in questo caso il suo valore è undefined, cioè non definito
- null invece si usa quando vogliamo assegnare un valore che rappresenta l'assenza di valori ma è comunque un valore*/

const numero = 10;
const stringa = "Questa è una stringa";
const boolean = true;
let nonDefinita;
const assenzaDiValore = null;

console.log("La variabile di nome numero è di tipo:", typeof numero);
console.log("La variabile di nome stringa è di tipo:", typeof stringa);
console.log("La variabile di nome boolean è di tipo:", typeof boolean);
console.log(
  "Questa è la somma della variabile numero e la variabile boolean:",
  numero + boolean
);
console.log("La variabile di nome nonDefinita è di tipo:", typeof nonDefinita);
console.log(
  "La variabile di nome assenzaDiValore è di tipo:",
  typeof assenzaDiValore
);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Mario";
console.log("Il mio nome è:", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const primoAddendo = 12;
const secondoAddendo = 20;
const sommaAddendi = primoAddendo + secondoAddendo;
console.log("12 + 20 =", sommaAddendi);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = 12;
console.log("Questa è la variabile x:", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* myName = "Fragnito"
console.log("Il mio cognome è:", myName)
 */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

const sottrazione = 4 - x;
console.log("4 - la variabile x:", sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = "john";
const name2 = "John";
const differenza = name1 === name2;
console.log("name1 = john, name2 = John, sono uguali?", differenza);
console.log(
  "name1 = john, name2 = John, se fossero entrambi minuscoli sarebbero uguali?",
  !differenza
);
