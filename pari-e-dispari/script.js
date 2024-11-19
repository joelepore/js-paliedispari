/*
  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

  Sommiamo i due numeri

  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

  Dichiariamo chi ha vinto.
*/
let userChoice, userNumber;

// 1. Prendo in input i dati richiesti e controllo che siano validi
do {
  userChoice = prompt('Scegli PARI o DISPARI');
  userChoice = userChoice.toUpperCase();
} while (userChoice != 'PARI' && userChoice != 'DISPARI');

do {
  userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
} while (userNumber < 1 || userNumber > 5);

// 2. Genero un numero random usando una funzione creata ad hoc 
const pcNumber = getRandomNumber(1, 5);
// 3. Faccio la somma
const sum = userNumber + pcNumber;

console.log('Hai giocato: ' + userNumber, userChoice);
console.log('Il computer gioca ' + pcNumber);
console.log("Totale: " + sum);

let message;

// 4. Stabilisco se la somma e' pari o dispari con una funzione
if (pariDispari(sum) === userChoice) {
  message = 'HAI VINTO!';
} else {
  message = 'HAI PERSO!';
}

// 5. Dichiaro chi ha vinto
console.log(message);

// Funzione che restituisce un numero random compreso fra due estremi, estremi inclusi
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funziona che verifica che un numero e' pari o dispari e restituisce PARI / DISPARI
function pariDispari(num) {
  if (num % 2 === 0) {
    return 'PARI';
  } else {
    return 'DISPARI';
  }
}