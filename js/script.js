//


/*Schema logico
1- Recupero il paragrafo con l'id
2- Chiedo il nome
3- Chiedo il cognome
4- Chiedo il colore preferito
5- Creo la password mettendo insieme le informazioni
6- Faccio comparire la password 

*/

//1-Recupero il paragrafo con l'id
const resultPassword = document.getElementById('password');

//2-Chiedo il nome
const firstName = prompt("Qual'è il tuo nome?");
console.log(firstName);


//3-Chiedo il cognome
const secondName = prompt("Qual'è il tuo cognome?");
console.log(secondName);

//4-Chiedo il colore prefito
const favouriteColor = prompt("Qual'è il tuo colore preferito");
console.log(favouriteColor);

//5- Creo la password mettendo insieme le informazioni
const passwordAddiction = firstName + secondName + favouriteColor + 21;
console.log(passwordAddiction);

//6- Faccio comparire la password
resultPassword.innerHTML = `La tua password è: <strong>${passwordAddiction}</strong>`;
console.log(password);