/*
ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
*/

// prendo l'elemento in padina 
const dice = document.getElementById('dice-game')
const winer = document.getElementById('winer')

// 1 creo delle variabili per il giocatore e la cpu generando dei numeri random da 1 a 6
const player =  Math.floor(Math.random() * 6) + 1
console.log(player) 
const cpu =  Math.floor(Math.random() * 6) + 1
console.log(cpu)

//stampo in pagina i due risultati 

dice.innerHTML = `<h3>Il numero del giocatore è ${player} mentre quello della cpu è ${cpu}</h3>`

//creo un if per verificare chi è il vincitore o se è un pareggio
if(cpu > player){
    winer.innerHTML = `<h5>Il vincitore è la cpu</h5>`
}else if(cpu < player){
    winer.innerHTML = `<h5>Il vincitore è il giocatore</h5>`
}else{
    winer.innerHTML = `<h5>E un pareggio</h5>`
}