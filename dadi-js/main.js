/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo. */

/* tools:
 - const 
 - mathrandom
 - if else
 - console log */

 // generazione numero giocatore e numero computer

 const userNumber = Math.floor(Math.random() * 7);
 console.log(`Numero del giocatore: ${userNumber}`);

 const computerNumber = Math.floor(Math.random() * 7);
 console.log(`Numero del computer: ${computerNumber}`);

 // condizioni ed esiti

 if (userNumber > computerNumber){
    console.log('Congratulazioni hai vinto!!');
 }
 else if (computerNumber > userNumber){
    console.log('Spiacente hai perso, vince il computer');
 }
 else{
    console.log('parità');
 }




