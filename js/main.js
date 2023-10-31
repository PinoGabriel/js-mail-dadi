/*************** INIZIO SEZIONE MAIL ************/

let eMail = document.getElementById("mail");

let myMail = prompt("inserisci la tua mail:", "pinogabriel@gmail.com");

const mailList = ["pinogabriel@gmail.com", "luca@gmail.com", "marco@gmail.com"];


for (let i = 0; i < mailList.length; i++) {
    console.log(mailList[i])
    
    if (myMail == mailList[i]) {
        console.log("funziona");
        eMail.innerHTML = "funziona"
    }
}

console.log("email da sola ", mailList[2]);
console.log(mailList.length);




/********** INIZIO SEZIONE DADI ************/

let dice = document.getElementById("dice");

let btn = document.getElementById("my_btn");

btn.addEventListener ("click", function() {

    let uDice = document.getElementById("userDice");
    let bDice = document.getElementById("botDice");
    let userdado = Math.floor((Math.random() * 6) +1);
    console.log (userdado);
    let botdado = Math.floor((Math.random() * 6) +1);
    console.log (botdado);
    let result = document.getElementById("result");

    if (userdado > botdado) {    
        result.innerText = "Hai vinto";
        result.classList.add("green"); 
    } else {
        result.innerText = "Hai perso"; 
        result.classList.add("red"); 
    }

    uDice.innerHTML = "mio dado: " + userdado;
    bDice.innerHTML = "bot dado: " + botdado;
})











/*************** SOLUZIONE MAIL CON CHATGPT ******************/

/* let eMail = document.getElementById("mail")
let myMail = prompt("inserisci la tua mail:", "pinogabriel@gmail.com")// La tua email
let emailList = ["pinogabriel@gmail.com", "luca@gmail.com", "marco@gmail.com"];
let found = false; // Variabile per tenere traccia se hai trovato una corrispondenza

for (let i = 0; i < emailList.length; i++) {
    if (myMail === emailList[i]) {
        found = true;
        break; // Esci dal ciclo se hai trovato una corrispondenza
    }
}

if (found) {
    console.log("funziona");
    eMail.innerHTML = "funziona";
} else {
    console.log("non funziona");
    eMail.innerHTML = "non funziona";
} */

/*************** SOLUZIONE CON CHATGPT ******************/