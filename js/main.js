

let eMail = document.getElementById("mail");

let myMail = prompt("inserisci la tua mail:", "pinogabriel@gmail.com");

const mailList = ["pinogabriel@gmail.com", "luca@gmail.com", "marco@gmail.com"];


for (let i = 0; i < mailList.length; i++) {
    console.log(mailList[i])
    
    if (myMail == mailList[i]) {
        console.log("funziona");
        eMail.innerHTML = "funziona"
    } else {
        console.log("non funziona");
        eMail.innerHTML = "non funziona"
    }
}

console.log("email da sola ", mailList[2]);
console.log(mailList.length);