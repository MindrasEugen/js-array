const prodotti = ["carne", "pesce", "patate", "zucchine"];
const quantita = [0, 5, 3, 4];

console.log(prodotti);
console.log(quantita);

for (let i = 0; i < prodotti.length; i++) {
    const qta = quantita[i];
    if (qta === 0) {
        console.log(prodotti[i], "Esaurito")
    } else if (qta < 5) {
        console.log(prodotti[i], "scorte basse")
    }

}