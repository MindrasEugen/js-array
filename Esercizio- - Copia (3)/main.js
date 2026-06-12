const postiLiberi = [2, 0, 4, 7, 12, 8];
let numero = Number(prompt("inserisci il numero di persone presente nel tuo gruppo"));
const carrozza = [];

console.log(postiLiberi);

for (let i = 0; i < postiLiberi.length; i++) {
    // const carrozza = postiLiberi[i];
    // if (numero <= carrozza) {
    //     console.log("la vostra carrozza e:", i + 1)
    // } else {
    //     console.log("posti insufficienti")
    // }
    if (postiLiberi[i] >= numero) {
        carrozza.push(i + 1)
    }
}

if (carrozza[0] > 0) {
    console.log("La vostra carrozza è:", carrozza[0])
} else {
    console.log("posti insufficienti")
}