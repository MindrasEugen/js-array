const allergeni = ["latte", "farina", "arachidi", "sesamo"];

let ingrediente = prompt("inserici ingrediente per vedere se è presente nella lista allergeni ");

if (allergeni.includes(ingrediente) === true) {
    console.log(ingrediente, "e presente nella lista degli allergeni");

} else {
    console.log("allergene non presente");

}