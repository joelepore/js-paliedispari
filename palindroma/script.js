/*
  Chiedere all’utente di inserire una parola
  Creare una funzione per capire se la parola inserita è palindroma
*/

let message;

const inputWord = prompt('Inserisci una parola.');

if (isPalindroma(inputWord)) {
  message = `${inputWord} e' una parola palindroma.`;
} else {
  message = `${inputWord} NON e' una parola palindroma.`;
}

console.log(message);

function isPalindroma(word) {
  return word.toLowerCase() === reverse(word).toLowerCase();
}

function reverse(word) {
  let outputWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    outputWord += word[i];
  }

  return outputWord;
}