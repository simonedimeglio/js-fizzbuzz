// Scrivi un programma che stampi i numeri da 1 a 100
// per i multipli di 3 stampa "Fizz"
// per i multipli di 5 stampa "Buzz"
// ovviamente, per i numeri multipli sia di 3, sia di 5, stampa "FizzBuzz"

// Creo l'output
var outputElement = document.getElementById('output');

// Ciclo che stampa i numeri 
for (var i = 1; i <= 100; i++) {
    var number = i;
    if ((i % 3 === 0) && (i % 5 === 0)) { // verifico subito se è multiplo di 3 e 5
        outputElement.innerHTML += 'FizzBuzz<br/>';
    } else if (i % 5 === 0) { // altrimenti verifico se è multiplo di 5
        outputElement.innerHTML += "Buzz<br/>";
    } else if (i % 3 === 0) { // altrimenti verifico se è multiplo di 3
        outputElement.innerHTML += "Fizz<br/>";
    } else { // se non è multiplo di nessuno dei due numeri richiesti, lo stampo normalmente.
        outputElement.innerHTML += i + '<br/>';
    }
}