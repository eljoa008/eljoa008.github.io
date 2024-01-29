let num = localStorage.getItem("liv")

document.getElementById("life").textContent = num;

function feil(){
    num--
    document.getElementById("life").textContent = num;

    if (num == 0){
        window.location.href="feil.html"
    }
}

function riktig(){
    localStorage.setItem("liv", num)
}
// Denne koden gjør at du har tre liv, når du trykker feil mister du et liv
// Hvis du går tom for liv må du starte på nytt