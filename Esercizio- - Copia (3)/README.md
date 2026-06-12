# Esercizio

Dati i posti liberi per carrozza [2, 0, 4, 7, 12, 8], chiedi all'utente il numero di passeggeri del gruppo e assegna loro la prima carrozza che ha capienza sufficiente, stampando il numero della carrozza scelta.


## ragionamento

- dichiaro l'array dei posti liberi per carrozza
- chiedo al utente di inserire il numero dei passeggeri del suo gruppo 
- dichiaro l'array delle carrozze
- PER ogni "postiLibero"
    - SE il numero passeggeri del gruppo <= ai posti liberi
        - agiungo un elemento al array delle carrozze
- SE il numero dei elementi del array carrozze e > 0
    - stampo La vostra carrozza è carrozze[0]
- ALTRIMENTI
    - stampo posti esauriti