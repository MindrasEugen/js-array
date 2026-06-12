const oreLavorate = [40, 47, 45, 38, 42];
const oreBaseSet = 40 * 5;
const pagaBase = oreBaseSet * 15;
let oreTot = 0;
let totale;

for (let i = 0; i < oreLavorate.length; i++) {
    oreTot = oreTot + oreLavorate[i];
    let oreExtra = oreTot - oreBaseSet;
    let pagaExtra = oreExtra * 5;
    totale = pagaBase + pagaExtra;
}





console.log("La tua paga settimanale è:", totale)