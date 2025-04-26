// Demande à l'utilisateur un nombre
let nombre = parseInt(prompt("Entrez un nombre :")); // permet de demander les infos aux utilisateurs
if (!isNaN(nombre)) {// isNaN = is Not a Number
    alert(`Table de multiplication de ${nombre} :`);
    for (let i = 1; i <= 10; i++) {
        alert(`${nombre} x ${i} = ${nombre * i}`);
    }
} else {
    alert("Veuillez entrer un nombre valide.");
}

// console

// navigateur