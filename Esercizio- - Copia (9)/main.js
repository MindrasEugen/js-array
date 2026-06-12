const parkNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const licensePlates = ["car1", "car2", "car3", "car4", "car5", "car6", "car7", "car8"];
const licensePlate = "car9"


for (let i = 0; i < licensePlates.length; i++) {
    licensePlates.includes("car9");

}

if (licensePlates.includes("car9") === true) {
    console.log("La tua machina si trova al posteggio:", licensePlates.indexOf("car4"));
} else {
    console.log("La tua macchina non e nel parchieggio");

}