const atleti = ["Antonio", "Bruno", "Carlo", "Diego", "Emanuel"];
const punteggi = [78, 93, 86, 91, 82];
const classifica = [...punteggi];
let temp = punteggi[0];

for (let i = 0; i < punteggi.length - 1; i++) {
    for (let j = 0; j < punteggi.length - 1; j++) {
        if (punteggi[j] < punteggi[j + 1]) {
            temp = punteggi[j];
            punteggi[j] = punteggi[j + 1];
            punteggi[j + 1] = temp;
        }
    }
}

const oroIndex = classifica.indexOf(punteggi[0]);
const argentoIndex = classifica.indexOf(punteggi[1]);
const bronzoIndex = classifica.indexOf(punteggi[2]);

console.log(atleti[oroIndex])
console.log(atleti[argentoIndex])
console.log(atleti[bronzoIndex])




