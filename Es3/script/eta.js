let età = parseInt(prompt("inserisci età"))
let puovotare = età>=25
document.getElementById("text").innerHTML = puovotare ? "Si, puoi votare" : "No, sei troppo giovane"