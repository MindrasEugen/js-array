# Esercizio

Date le temperature settimanali, trova il valore massimo, il minimo e calcola la media aritmetica delle sette giornate.

## ragionamento

- definisco l'array delle temperature
- dichiaro tmax = temperatyre[0]
- dichiaro tmin = temperature[0]
- dichiaro somma = 0
- PER ogni temperatura registrata 
    - somma = somma + temperatura[i]
    - SE temperature[i] > tmax
        - tmax = temperatura[i]
    - SE temperatura[i] < tmin
        - tmin = temperatura[i]
- dichiaro tmedia = somma / temperature.length
- stampo tmedia, tmax, tmin