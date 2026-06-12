# esercizio

Un ospedale ha 7 infermieri con questi turni: ["mattina", "pomeriggio", "notte", "mattina", "pomeriggio", "notte", "mattina"]. Conta quanti infermieri lavorano in ciascun turno. 

## ragionamento

- dichiaro l'array dei turni
- SE turno === mattina
    - mattina++
- ALTRIMENTI 
    - SE turno === pomeriggio 
        - pomeriggio++
- ALTRIMENTI
    - SE turno === notte
        - notte++
- stampo mattina
- stampo pomeriggio
- stampo notte