// -----------Snack 1.1----------------
// function somma(a, b) {
//     return a + b;
// }

// Test della funzione
// console.log(somma(2,3))

// -----------Snack 1.2----------------

// const sommanonima = function(a,b){
//     return a + b;
// }

// -----------Snack 1.3----------------
// const sommanonima = (a,b) => a + b ;

// Test della funzione
// console.log(sommanonima(1,2))

// -----------Snack 2----------------

function quadrato(numero) { return numero * numero; }

// Test della funzione
// console.log(quadrato(4));

// -----------Snack 3----------------

const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);


console.log(eseguiOperazione(5, 8, somma));
console.log(eseguiOperazione(5, 8, moltiplica));

// -----------Snack 4----------------