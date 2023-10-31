

let eMail = document.getElementById("mail");

let myMail = prompt("inserisci la tua mail:", "pinogabriel@gmail.com");

const mailList = ["pinogabriel@gmail.com", "luca@gmail.com", "marco@gmail.com"];

for (let i = 0; i < mailList.length; i++) {
    const element = mailList[i];
    console.log(element)
    
    if (myMail == element) {
        eMail.innerHTML = "funziona"
    } else {
        eMail.innerHTML = "non funziona"
    }
}

console.log("email da sola ", mailList[2]);