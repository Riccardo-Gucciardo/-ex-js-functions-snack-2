// function somma(a, b) {
//     return a + b;
// }

// Test della funzione
// console.log(somma(2,3))

// const sommanonima = function(a,b){
//     return a + b;
// }



// const sommanonima = (a,b) => a + b ;

// Test della funzione
// console.log(sommanonima(1,2))


function quadrato(numero) { return numero * numero; }

// Test della funzione
// console.log(quadrato(4));

const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);


console.log(eseguiOperazione(5, 8, somma));
console.log(eseguiOperazione(5, 8, moltiplica));
