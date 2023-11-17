/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random()*20) + 1; // senza il + 1 non esce mai 20
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Alice",
  surname: "Alessandrini",
  age: 29
}
console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me['skills'] = ["HTML", "CSS", "Javascript Basic"]; // me.skills.push('photoshop')
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push('Photoshop') // me['skills'].push('photoshop')
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()
console.log(me)



//----------------------------------------------------------------------------------------------------------------------------
// Funzioni
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  let dado = Math.floor(Math.random() * 6) + 1; // lo stesso metodo del random number dell'esercizio B
  return dado
   }
  console.log("Risultato del dado: " + dice()) 


//----------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

/* METODO COMPLICATO

 function whoIsBigger() {
  const n1 = Math.floor(Math.random() * 10) + 1;
  const n2 = Math.floor(Math.random() * 10) + 1;
  if (n1 > n2) {
    document.getElementById('thebiggernumber').innerHTML = "Il maggiore è n1: " + n1
  } else {
    document.getElementById('thebiggernumber').innerHTML = "Il maggiore è n2: " + n2
  }
}
whoIsBigger() */

/* METODO GIUSTO */
let whoIsBigger = function(a, b){
  if(a > b ){
     return a
  }else{
    return b
  }
}
let whoIsBiggerPrint = whoIsBigger(44, 15)
console.log(whoIsBiggerPrint) 

//----------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (string) {   // string come paramentro
  const arrayString = string.split(" ");         //divido la stringa per gli spazi che contiene
  return arrayString;                            // ritorno l'array
};
console.log(splitMe("bel film Split"));

//----------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function(string, boolean) {
  let printString = "";
if (boolean === true) {
  printString = string.slice(1); //levo solo la C
} else {
  printString = string.slice(0, -1); // con solo "-1" il risultato sarebbe solo la i
}
return printString
}
console.log(deleteOne("Ciao a tutti", true))  //esempio true
console.log(deleteOne("Ciao a tutti", false)) // con return potevo stampare in console


//----------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function(string) {
  let senzaNumeri = ""; // questa è una variabile stringa vuota che rappresenta il risultato finale e vado a ciclare
  for( let i = 0; i < string.length; i++) { // ciclo fof
    let stringReplace = string[i]; // nuova var alla quale assegno string
    if (isNaN(parseInt(stringReplace))) { // se in stringReplace ci sono numeri (che vengono trasformati in num da parseInt)
      // string.replace(stringReplace[i], "") // allora sostituisco i num in string replace con nulla
      senzaNumeri += stringReplace; // unisco la senza numeri filtrata da IF con la nuova, che ora viene riempita 
  }
}
  return senzaNumeri // ritorno la stringa senza numeri
}
console.log(onlyLetters("Ho 3 cani, 2 gatti e 1 sorella"))
console.log(onlyLetters("3 tigri contro 3 tigri"))

/*
const onlyLetters = function(string) {
  const ReplacedString = string.replace(/[0-9]/g, ""); // ? //espressioni regolari -> linguaggio a parte sigh
  return ReplacedString;
}
console.log(onlyLetters("Ho 3 cani, 2 gatti e 1 sorella"))
console.log(onlyLetters("3 tigri contro 3 tigri"))
*/ 


// -------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (stringa) {
  const maybeEmail =stringa.includes('@');
  return maybeEmail;
}
console.log(isThisAnEmail('esercizio6@mail.com')) //esempio cont true
console.log(isThisAnEmail('FenicotteriRosa.it'))   // esempio con false

//----------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const weekDays = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
]
const whatDayIsIt = function() {
 const today = new Date();
  console.log(today);
  const thisDay = today.getDay();
  console.log(thisDay);
  for (let i = 0; i < weekDays.length; i++) {
    const nomigiorni = weekDays[thisDay];

    if (thisDay === i) {
      console.log(weekDays[i]);
    }
  }
};
whatDayIsIt();

/*
Tentativi precedenti: 

const whatDayIsIt = function() {
  const stampaGiorno = document.getElementById('cheGiorno')  // mi aggancio allo span dell'esercizio corrente nell'HTML
  const daysIndex = now.getDay()        //venerdì dovrebbe essere 5 se 0 è domenica
  const currentDay = weekDays[daysIndex]     // "Venerdì"
  return currentDay
}
whatDayIsIt() // non va nonostante abbia seguito passo passo il metodo utilizzato per stampare il mese in h1 dell'esercizio del calendario
*/

/* const whatDayIsIt = function (){
  const todayDay = new Date();
  console.log(todayDay)
  const currentDay = now.getDay()    // mi da sempre errore su now. quindi mi sono spazientita e sono tornata più avanti.
  console.log(currentDay) 
}
whatDayIsIt() */ 


//----------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = function (lanci) {
 let finalDice = {sum: 0, values: []}
 for (i = 0; i < lanci; i++) {
   let uscito = dice(); // assegnando a dice una let non fa uscire un numero in più (perchè è fissato in una let)
   finalDice.sum += uscito;
   finalDice.values.push(uscito)
 }
return finalDice
}

console.log(rollTheDices(4)); 

/*
document.getElementById('lancioDadi').innerHTML = sum 
const rollTheDices = function (lanci) {
  const result = [];
  sum = 0;
  // ciclo for
  for ( i = 0; i < lanci; i++) {
  const lancioDado = dice() // invoco la funzione dice e il valore lo lego alla const lancio dado
  result.push(lancioDado);} //push dentro l'array dei risultati del valore invocato con dice */
/*
  function somma (total, num) {
    return total - num;
}
 return sum = result.reduce(somma)
}

rollTheDices(6)     // 30 perenne, in console da errore se non specifico un numero tra le parentesi.*/
/*
let ritorna = {
  sum: 0,
  values: []
}

let rollTheDices = function (lancio) {
 let lancio = 
} */



// let ripetizioni
// const dadiObj (somma dei due dadi
//)
//funzione rell de dice ciclata
  // dentro push valori
  //return somma


// --------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const myBDay = "1993-12-12";
const laurea = "2023-03-23";
const howManyDays = function (data) {
  const today = new Date();     
  const newDate = new Date(data);

  const differenceDays = (today - newDate); // calcolo la distanza di giorni tra oggi e la data che settiamo
  const passedDays = (Math.floor(differenceDays / (1000 * 60 * 60 * 24))) // math floor mi arrotonda a num intero
  return passedDays;
} 
console.log(`Sono passati ` + howManyDays(myBDay) + ` dal ${myBDay} a oggi.`)
console.log(`Sono passati ` + howManyDays(laurea) + ` dal ${laurea} a oggi.`)

//----------------------------------------------------------------------------------------------------------------------------

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const birtdayDay =  new Date("December 12")
const isTodayMyBirthday = function () {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  if (day === 11 && month === 11) {
    console.log('Auguri a me!')
  } else {
    console.log('Oggi non è il mio compleanno')
  }
}
isTodayMyBirthday ()

//----------------------------------------------------------------------------------------------------------------------------
// Arrays & Oggetti
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = function (obj, string) {
 delete obj[string];
 return obj;
}
// array per vedere se funziona
const mustRewatch = {
  Title: 'Barbie',
  Year: '2023',
  imdbID: 'il suo',
  type: 'movie',
}
console.log(mustRewatch)
console.log(deleteProp(mustRewatch.imdbID))

// sennò da un array ipotetico 
/* const propToDelete = "Year"
const deleteProp = function(arr, string) {
  arr.forEach((el) => {
    delete el[string];
  })
  return arr
}
*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
 ciclo l'array metto dentro una variabile quello più recente */

const newestMovie = function (arr, string) { // uso parametri string e function 
 let newOne = movies [0]; // costante in cui newOne è uguale a un certo numero nell'indice di Movies (partendo da 0)
 for ( let i = 0; i < movies.length; i++) { // ciclo for
   if (parseInt(movies[i].Year) > parseInt(newOne.Year)) // SE num che passo con parseInt tentro movie.year > num che passo con parseInt dentro newOne year ALLORA
   {newOne = movies[i];  // new movie allora diventa = movies
  }
 }
 return newOne
}

console.log(newestMovie())

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function() {
  let length = movies.length
  return movies.length
}
console.log(countMovies())

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
// dentro la funzione che ha come parametro array
// creo una var array vuoto,ciclo array
// dentro a movie years metto l'anno dell'array
//return my movies[i] arr [i] .year
//return movie years

const onlyTheYears = function(arr) {
 let justYears = [];
 for (i = 0; i < arr.length; i++) { // ciclo per la lunghezza di length
  justYears[i] = arr[i].Year // per ogni elemento di movies passo year che metto dentro a just years
 }
 return justYears;
}

const years = onlyTheYears(movies)
console.log(years)

//---------------------------------------------------------------------------------------------------------
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
// filter per il millennio scorso

const onlyInLastMillennium = function (movies) {
  let nintiesMovies = [];
  for (i = 0; i < movies.length; i ++) {// ciclo per la lunghezza di length
   if (parseInt(movies[i].Year) > 1999) { // SE year dentro movies è maggiore di 1999 (num parsato con parse Int)
    nintiesMovies.push(movies[i]);  // ALLORA lo pusho dentro ninties movies. in questo caso, nintiesMovies non va messo perchè è vuoto e non sarà comunque un array di array
   }
  }
  return nintiesMovies;
}

console.log(onlyInLastMillennium(movies))

//-------------------------------------------------------------------------------------------------
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function (movies) {
  let totAnni = 0;
  movies.forEach(el => { //per ogni el (elemento) di movies allora
    totAnni += parseInt(el.Year);
    })
    return totAnni;
} 
console.log(sumAllTheYears(movies));

//------------------------------------------------------------------
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (string, movies) {
 let searchedTitle = [];
  searchedTitle = movies.filter(el => el.Title.toLowerCase().includes(string.toLowerCase()))
return searchedTitle
}

console.log(searchByTitle('endgame', movies))
console.log(searchByTitle('lord', movies))

//---------------------------------------------------------------------------------
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.

  funzione con parametro array e stringa
  oggetto contente match / unmach (due array)
  ciclo con for each el =>
  se titolo macha lo pusho dentro marchdell'oggetto
  altrimenti dentro match dell'oggetto
  return obj

  poi lancio funzione
*/

let searchAndDivide = function(string)  {
let matchUnmatched = { match: [], unmatch: []}
for (let i = 0; i  < movies.length; i++) {
  if (movies[i].Title.toLowerCase().includes(string.toLowerCase())){
    matchUnmatched.match.push(movies[i]) 
  } else {
    matchUnmatched.unmatch.push(movies[i])
  }
} return matchUnmatched;
}

console.log(searchAndDivide('Avengers'));


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

/* 
let removeIndex = function(numS, numE) { // con due numeri leva da un tot dell'indice ad un altro
  let rimossi = []; // creo un array 
  let moviesCopy = []; // array copia di movie sul quale andrò effettivamente a rimuovere gli elmenti
 for (let i = 0; i < movies.length; i++) {
  let movieCopia = movies[i].slice() //slice non li toglie davvero, quindi creo prima una copia di OGNI INDICE di movie come singolo sulla quale agire per poi toglierli effettivamente
  moviesCopy.push(movieCopia); // push dei movie singoli in movieS
  const splicedFromIndex = movieCopia.splice(numS, numE - numS);
  rimossi.push(splicedFromIndex)
 } return {rimossi , moviesCopy}
}
console.log(removeIndex(1, 5)) */

let removeIndex = function (index) { // come parametro passo l'indice
  let rimossi = []; // creo l'array dove mettere i rimossi
  for (let i = 0; i < movies.length; i++) { //ciclo movies
    if (index !== i) { // se index è diverso da i allora
      rimossi.push(movies[i])
  }
} return rimossi
}
console.log(removeIndex(0))

//-----------------------------------------------------------------------------------------------/*
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectContainer = function () {
  const container = document.getElementById('container')
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const tdSelector = function () {
  let tdsel = document.getElementsByTagName('td');
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printContent = function() {
  let tdContent = document.querySelectorAll('td');
  for (let i=0; i<tdContent.length; i++) {
    console.log(tdContent[i])
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.

*/

const redBgA = function() {
  const redA = document.querySelectorAll('a')
  redA.forEach(el=> {
    el.setAttribute('style', 'background-color: red') //setto i nuovi attributi da dare a ogni redA
  })
}
redBgA()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
/* 
const newElement = function() {
  const lista = document.getElementById('MyList'); //seleziono l'id MyList
  const eleNuovo = document.createElement('li'); //creo un nuovo li
  eleNuovo.innerText = "ciao"
  lista.appendChild(li)  // aggancio
}
newElement()  */

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
// con remove!
// con querySelector // for each
 const removeFromList = function() {
  let lista = document.querySelectorAll('#myList li');
  lista.forEach(el => { // per ogni elemento della lista
    el.remove()         // rimuove ogni elemento della lista
  })
 }


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

 let aggiunta = function() {
  let tableRow = document.querySelectorAll('tr'); // seleziono tutti i tr
  tableRow.forEach (el => { //per ogni elemento tr
    el.classList.add('test') // aggiungo la classe test
  })
 }
aggiunta() 


//----------------------------
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */


