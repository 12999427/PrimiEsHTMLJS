let età = parseInt(prompt("inserisci età"));
let puovotare = età>=25;
if (isNaN(età) || età<0){
    document.getElementById("text").innerHTML = "Non valido";
} else {
    document.getElementById("text").innerHTML = puovotare ? "Si, puoi votare" : "No, sei troppo giovane";
}