/*Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/


/*Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.*/

var studente = {
  "nome": "Niccolò",
  "cognome": "Santelli",
  "età": 28
}

for (var key in studente){
  console.log(studente[key]);
}


/*Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome*/
var gruppoStudenti = [
  studente1 = {
   "nome": "Niccolò",
   "cognome": "Santelli",
 },

  studente2 = {
   "nome" : "Gennaro",
   "cognome": "Rossi",
 },

  studente3 = {
   "nome": "Franco",
   "cognome": "Cadrega",
 },
];
for (var key in gruppoStudenti){
  console.log(gruppoStudenti[key]);
}


/*Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/

var studente4 = {
  "nome": prompt("inserisci nome"),
  "cognome": prompt("inserisci cognome"),
  "età": Number(prompt("inserisci età"))
}
gruppoStudenti.push(studente4);

for (var key in gruppoStudenti){
  console.log(gruppoStudenti[key]);
}
