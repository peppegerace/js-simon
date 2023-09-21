// 1. Dichiaro le variabili globali.

// 2. Funzione per generare numeri random.

// 3. Creo un array dove inserisco i numeri random generati.

// 4. Funzione per far partire il timer.

// 5. raccolgo i dati dall'utente.

// 6. Creo un array per raccogliere i dati dell'utente.

// 7. Funzione per verificare che i numeri scritti dall'utente sono inclusi nell'array dei numeri random generati.

// 8. Stampo in pagina quanti e quali numeri sono stati indovinati

// 1.
const stampa = document.getElementsByClassName('output')[0];
let outputAnswer = document.getElementById('output-answer');
// 3.
let numbersGenerated = [];

// ciclo per generare tot numeri random
while (numbersGenerated.length < 5) {
  let numero = randomNumberGenerator();
  if (!numbersGenerated.includes(numero)){
    numbersGenerated.push(numero);
  } 
  console.log(numero);
  console.log(numbersGenerated)
  
}

// stampo i numeri in pagina 
stampa.textContent = 'Cerca di memorizarre tutti i numeri. Vediamo quanti ne indovini!' + numbersGenerated.join(' - ');

// countdown reset
setTimeout(reset, 5000);
setTimeout(answer, 5500);

/***********FUNZIONI***********/
// 2.
function randomNumberGenerator() {
  return Math.floor(Math.random() * 20) + 1;
}

// 4.
function reset() {
  stampa.innerHTML = '';
  console.log('questa istruzione viene eseguita dopo 5 secondi');
}

// 5.
function answer() {
  // 6.
  let userAnswers = [];

  // Ciclo per chiedere la stessa domanda 5 volte
  for (let i = 0; i < 5; i++) {
    let domanda = prompt('Quali numeri sono apparsi sullo schermo? Inseriscili uno alla volta');
    userAnswers.push(domanda);
  }

  // 7.
  let numeriIndovinati = [];

  for (let i = 0; i < 5; i++) {
    if (numbersGenerated.includes(parseInt(userAnswers[i]))) {
      numeriIndovinati.push(userAnswers[i]);
    }
  }

  // 8.
  if (numeriIndovinati.length > 0) {
    outputAnswer.innerHTML = `Hai indovinato ${numeriIndovinati.length} numeri: ${numeriIndovinati.join(', ')}`
    console.log(`Hai indovinato ${numeriIndovinati.length} numeri: ${numeriIndovinati.join(', ')}`);
  } else {
    outputAnswer.innerHTML = 'Non hai indovinato nessun numero.';
    console.log('Non hai indovinato nessun numero.');
  }
}