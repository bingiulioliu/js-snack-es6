// ## Snack2
// - Creare un array di oggetti di squadre di calcio.
// - Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// - Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squadreCalcio = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// - Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

//Funzione randomizzatore
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ciclo for x5 per modificare punti e falli
for (let i = 0; i < 5; i++) {
    console.log(squadreCalcio[i].puntiFatti = getRandomInt(0, 10));
    console.log(squadreCalcio[i].falliSubiti = getRandomInt(0, 10));
    
}

// - Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.