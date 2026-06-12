const compleanno = new Date(2026, 5, 23);

const giorni = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

const giornoSettimana = compleanno.getDay();

const nomeGiorno = giorni[giornoSettimana];

console.log(nomeGiorno);
