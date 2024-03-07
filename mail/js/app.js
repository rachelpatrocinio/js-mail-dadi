console.log("MAIL");
// AL CLICK DELL'UTENTE SUL BUTTON
// 1. DICHIARO UNA VARIABILE CHE ESTRAPOLA IL BUTTON DAL DOM
let checkButton = document.getElementById("check-button");
console.log(checkButton);
// 1A. ASCOLTO L'EVENTO CLICK DEL BUTTON DALL'UTENTE
checkButton.addEventListener("click", function(){
    //DOPO IL CLICK
    //CONTROLLO L'EMAIL CHE HA INSERITO L'UTENTE NELL'INPUT
    // 1. CREO UNA VARIABILE CHE ESTRAPOLA IL VALORE (.value) DELLL'INPUT TYPE EMAIL DAL DOM
    const inputEmailValue = document.getElementById("input-email").value;
    console.log(inputEmailValue);
    
    // 1A. DICHIARO UNA VARIABILE E ASSEGNO VARI VALORI CON L'ARRAY
    const validEmails = ["rachelannepatrocinio@gmail.com", "jhero95@ymail.com", "marierabang72@yahoo.it", "ronaldpatrocinio@gmail.com"]
    
    let validation = false;
    // 1B. CICLO FOR
    // PER OGNI VALORE PRESENTE ALL'INTERNO DELL'ARRAY validEmails (validEmails.length) CONTROLLO...
    for (let i = 0; i < validEmails.length; i++){
        //console.log(validEmails[i]);
        // .. SE IL VALORE DATO DALL'UTENTE (EMAIL) SIA VALIDO
        if(inputEmailValue === validEmails[i]){
            validation = true;
        }
    }

    // STAMPO IN CONSOLE LA RISPOSTA DELLA VALIDAZIONE
    // SE VALIDATION === TRUE ALLORA L'EMAIL INSERITA DALL'UTENTE è CORRETTA
    if(validation === true){
        console.log("La tua e-mail è valida");
    }
    //ALTRIMENTI L'EMAIL INSERITA DALL'UTENTE NON è VALIDA.
    else{
        console.log("La tua e-mail non è valida");
    }
})
 