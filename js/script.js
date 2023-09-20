// 1. Dichiaro le variabili globali.

// 2. Funzione per generare numeri random.

// 3. Creo un array dove inserisco i numeri random generati.

// 4. Funzione per far partire il timer.

// 5. raccolgo i dati dall'utente.

// 6. Creo un array per raccogliere i dati dell'utente.

// 7. Funzione per verificare che i numeri scritti dall'utente sono inclusi nell'array dei numeri random generati.

// 8. Stampo in pagina quanti e quali numeri sono stati indovinati

// 1.
const stampa = document.getElementsByClassName('output')

// 3.
let numbersGenerated = [];

// ciclo per generare tot numeri random
while (numbersGenerated.length < 5) {
  let numero = randomNumberGenerator()
  if (!numbersGenerated.includes(numero)){
    numbersGenerated.push(numero);
  } 
  console.log(numero);
  console.log(numbersGenerated)
}


/***********FUNZIONI***********/
// 2.
function randomNumberGenerator() {
  return Math.floor(Math.random() * 20) +1;
}