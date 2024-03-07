console.log("DADI");

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// DICHIARO UNA VARIABILE E ASSEGNO UN NUMERO RANDOM AL GIOCARE
const playerNumber = Math.floor(Math.random()*6)+1;
console.log("Player Number:" , playerNumber);

// DICHIARO UNA VARIABILE E ASSEGNO UN NUMERO RANDOM AL COMPUTER
const cpNumber = Math.floor(Math.random()*6)+1;
console.log("Computer Number:" , cpNumber);

// SE IL NUMERO DI playerNumber è MAGGIORE DEL NUMERO DI cpNumber => VINCE playerNumber
// ALTRIMENTI SE IL NUMERO DI cpNumber è MAGGIORE DEL NUMERO DI playerNumber => VINCE cpNumber
// ALTRIMENTI SE I NUMERI SONO UGUALI PARITA'!
if(playerNumber > cpNumber){
    console.log("The Winner is the Player!");
} else if(cpNumber > playerNumber){
    console.log("The Winner is the Computer!");
} else if(cpNumber === playerNumber){
    console.log("It's a Tie!");
}
