const temperature = [12, 16, 20, 10, 22, 18, 21];
let tmax = temperature[0];
let tmin = temperature[0];
let somma = 0;

for (let i = 0; i < temperature.length; i++) {
    somma = somma + temperature[i];
    if (tmax < temperature[i]) {
        tmax = temperature[i]
    }
    if (tmin > temperature[i]) {
        tmin = temperature[i]
    }

}

let tmedia = somma / temperature.length;
console.log("la temperatura massima della settimana è:", tmax);
console.log("La temperatura minima della settimana è:", tmin);
console.log("La temperatura media della settimana è:", tmedia);