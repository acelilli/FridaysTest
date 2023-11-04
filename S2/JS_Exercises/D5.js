/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
let p = pets.sort();
console.log(p);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
let r = pets.reverse();
console.log(r);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.shift();
pets.push("redfish");
console.log(pets);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for(let singleCar of cars) {
  singleCar.licensePlate = "AA1212AA";
}; 
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push( {brand: 'Kia', model:'Picanto', color:'red', trims: ['steel', 'cd', 'vibrant'], licensePlate: 'AA1212AA'});
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop([length - 1]);
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for(let i = 0; i < cars.length; i++) {  //inizializzazione, condizione e modifica
  let vtrims = cars[i].trims;  // voglio che la lunghezza di trims in cars sia = al let virtuale vtrims
  justTrims.push(vtrims);              // push in justTrims del contenuto della let virtuale vtrims
  }
  console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for(let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === 'b') {   //con charAt seleziono il primo carattere della stringa
    console.log('Fizz')
  } else {
    console.log('Buzz')
  }
};

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

var i = 0;
while (numericArray[i] !== numericArray[14]) { //parto dalla i di numericArray (cioè la posizione 0 = 6) e arrivo alla 14 posizione(si 32)
    console.log (numericArray[i]);             //in console mostro i numeri da i fino 32 (i diverso da 14esima posizione)
    i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

const positionsArray = []; //array vuoto per le posizioini dei caratteri

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "g":
      positionsArray.push(7);
      break;
    case "n":
      positionsArray.push(14);
      break;
    case "u":
      positionsArray.push(21);
      break;
    case "z":
      positionsArray.push(26);
      break;
    case "d":
      positionsArray.push(4);
      break;
  }
}

console.log(positionsArray);