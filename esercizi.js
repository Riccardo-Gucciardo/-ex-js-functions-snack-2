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


// console.log(eseguiOperazione(5, 8, somma));
// console.log(eseguiOperazione(5, 8, moltiplica));

// -----------Snack 4----------------


function CreaTimer(tempo){
    return function(){
        setTimeout(() => console.log("tempo scaduto"),tempo)
    }
}

const timer = CreaTimer(5000)

// timer()

// -----------Snack 5----------------

function messaggioLoop(){
    setInterval(function(){
        console.log("ciao")
    },3000)
}

// messaggioLoop()

// -----------Snack 6----------------


function creaContatore(interval){
    let contatore = 0
    return function(){
        setInterval(()=>{
            contatore ++
            console.log(contatore);
            
        },interval)
    }
}

// const intervallo = creaContatore(1000)

// intervallo()

// -----------Snack 7----------------

function eseguiEferma(messaggio,tempoAvvio,tempoStop){
    const intervallo = setInterval(() => console.log(messaggio),tempoAvvio);

    setTimeout(() => clearInterval(intervallo),tempoStop)

}

// eseguiEferma("adios",1000,5000)

// -----------Snack 8----------------

function contoAllaRovescia(tempoStart){
    let numeri = tempoStart
    const countdown = setInterval(()=> {
        if(numeri>0){console.log(numeri);numeri --,tempoStart}
        else{console.log("fine");clearInterval(countdown)    
        
    }
},1000)

}

// contoAllaRovescia(10)

// -----------Snack 9----------------

function sequenzaOperazioni(operazioni,tempo){
    operazioni.forEach((operazione,indice) => { setTimeout(operazione,tempo * (indice+1))
        
    });
}

const op1 = () => console.log("Operazione 1");
const op2 = () => console.log("Operazione 2");
const op3 = () => console.log("Operazione 3");
const operazioni = [op1, op2, op3];

// sequenzaOperazioni(operazioni, 1000);

// -----------Snack 10----------------

function creaThrottler(operazione, limite) {
    let bloccato = false;
    
    return function() {
        if (!bloccato) {
            operazione();
            bloccato = true;
            setTimeout(() => {
                bloccato = false;
            }, limite);
        }
    };
}

const stampa = () => console.log("Eseguito!");

const throttlerStampa = creaThrottler(stampa, 2000);

// throttlerStampa(); // Eseguita subito
// throttlerStampa(); // Ignorata
// throttlerStampa(); // Ignorata
// setTimeout(() => throttlerStampa(), 2100); // Eseguita dopo ~2.1s


// -------------ex - snack oggetti------------------

// ----------code question 1-------- 

// -L'assegnazione secondBurger = hamburger non crea un nuovo oggetto,
//  ma copia il riferimento allo stesso oggetto.

// -Le modifiche a name e weight alterano le proprietà dell'oggetto

// ----------code question 2-------- 

// -secondBurger.ingredients e hamburger.ingredients 
//  si riferiscono allo stesso array in memoria,
//  modificare secondBurger.ingredients[0] cambia il primo elemento dell'array
//  quindi in console stamperà salad per entrambi 

// -gli oggetti creati in memoria sono :
//  L'oggetto hamburger.
//  L'array ingredients.
//  L'oggetto secondBurger.

// ----------code question 3-------- 

// sono tre oggetti per ogni Hamburger quindi 9 
// (hamburger,maker,resturant) (secondBurger,maker,ecc...)

// ----------code question 4-------- 

// -

// -structuredClone perchè crea una copia profonda, 
//  duplicando correttamente l'oggetto annidato address
//  e mantenendo openingDate come oggetto Date


// ----------code question 5-------- 






// ----------code question 6-------- 

// -Applicando lo spread operator a ogni livello (chef, restaurant, address) cosi facendo
//  a differenza dello structuredClone() riusciamo a mantenere le funzioni
//  (makeBurger, welcomeClient, showAddress) copiate come riferimenti, 
//  rimanendo eseguibili



