/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’. */

// preparazione della lista di email degli invitati

const email_list = ['saraesposito@gmail.com', 'giacomorossi@gmail.com', 'alessandromagno@gmail.com','antonioscognamillo@gmail.com']
console.log(email_list);

// chiediamo all'utente la sua mail

const user_email = prompt('Inserisci e-mail')

// verifica della mail dentro la lista

for (let i = 0; i < email_list.length ; i++){
    const verify_email = email_list [i]

    if (user_email === verify_email){
        // messaggio dell'esito
        console.log('la tua mail è valida, sei ufficialmente invitato alla festa!!');
    }
}
