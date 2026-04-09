// ## Snack 1
// - Creare un array di oggetti:
//     Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// - Stampare a schermo la bici con peso minore.

const biciDaCorsa = [
    { 
        nome: "Specialized S-Works Tarmac SL8", 
        peso: 6.6 
    },
    { 
        nome: "Trek Emonda SLR 9", 
        peso: 6.2 
    },
    { 
        nome: "Cannondale SuperSix EVO Lab71", 
        peso: 6.8 
    },
    { 
        nome: "Pinarello Dogma F12", 
        peso: 6.9 
    },
    { 
        nome: "Canyon Ultimate CFR", 
        peso: 6.3 
    },
    { 
        nome: "Colnago V4Rs", 
        peso: 6.8 
    },
    { 
        nome: "Giant TCR Advanced SL 0", 
        peso: 6.4 
    },
    { 
        nome: "Wilier Filante SLR", 
        peso: 6.8 
    },
    { 
        nome: "Bianchi Specialissima RC", 
        peso: 6.6 
    },
    { 
        nome: "Scott Addict RC Ultimate", 
        peso: 6.7 
    }
];

console.log(`La bici ${biciDaCorsa[1].nome} pesa meno: ${biciDaCorsa[1].peso}`);

// creo una variabile contenitore
let biciLeggera = biciDaCorsa[0];

// ciclo for per ricerca e scrematura
for (const biciTemp of biciDaCorsa) {
    if (biciTemp.peso < biciLeggera.peso) { // confronto la bici attuale con tutte le altre 
        biciLeggera = biciTemp;             // per sostituirla ogni volta che ha il peso minore
    }
}
console.log(`La bici più leggera è la: ${biciLeggera.nome}`);
