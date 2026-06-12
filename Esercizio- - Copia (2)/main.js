const studenti = ["Mario", "Giuseppe", "Eugenio", "Maria"];
const voti = [2, 8, 10, 4];

console.log(studenti);
console.log(voti);


for (let i = 0; i < studenti.length; i++) {
    const verifica = voti[i];
    if (verifica > 5) {
        console.log(studenti[i], "sei stato promosso")
    } else {
        console.log(studenti[i], "sei stato bocciato")
    }

}