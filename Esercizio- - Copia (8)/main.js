const turni = ["mattina", "pomeriggio", "notte", "mattina", "pomeriggio", "notte", "mattina"];

let mattina = 0;
let pomeriggio = 0;
let notte = 0;

for (let i = 0; i < turni.length; i++) {
    const turno = turni[i];

    if (turno === 'mattina') mattina++;
    if (turno === 'pomeriggio') pomeriggio++;
    if (turno === 'notte') notte++;
}

console.log('mattina', mattina);
console.log('pomeriggio', pomeriggio);
console.log('notte', notte);
