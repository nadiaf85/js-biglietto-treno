let userAge = prompt ('Inserisci età');
let distanceKm = prompt ('Inserisci i km che vuoi percorrere');

let ticketPrice = (distanceKm * 0.21) 
console.log (ticketPrice)

if (userAge < 18){
    document.getElementById ('prezzo_tot').innerHTML= (ticketPrice - (ticketPrice/100) * 20) .toFixed(2);
}else if (userAge >= 65){
    document.getElementById ('prezzo_tot').innerHTML= (ticketPrice - (ticketPrice/100) * 40) .toFixed(2);
}else {
    document.getElementById ('prezzo_tot').innerHTML= (ticketPrice + '€');
}
