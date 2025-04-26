// Nos fonctions

function Addition(nombreA, nombreB) {
    return nombreA + nombreB;

}

function Soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}

function Multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}

function Division(nombreA, nombreB) {
    if (nombreB == 0) {
        alert("Erreur : Imposible de divisé par 0 !");
        return null;
    } else {
        return nombreA / nombreB;
    }
}


// Demande à l'utilisateur de choisir une opération

do {
    var choix = parseInt(prompt("Que voulez-vous faire ?\n\n 1 - Addition\n 2 - Soustraction\n 3 - Multiplication\n 4 - Division\n"));
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

// recuperation des nombres pour les operations

do {
    var premierNombre = Number(prompt("Entrez le premier nombre : "));
    var deuxiemeNombre = Number(prompt("Entrez le deuxieme nombre : "));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));


try {
    switch (choix) {
        case 1:
            var resultat = Addition(premierNombre, deuxiemeNombre);
            break;
        case 2:
            var resultat = Soustraction(premierNombre, deuxiemeNombre);
            break;
        case 3:
            var resultat = Multiplication(premierNombre, deuxiemeNombre);
            break;
        case 4:
            var resultat = Division(premierNombre, deuxiemeNombre);
            break;
        default:
            throw new Error('Une erreur est survenue');
    }
    alert("Le résultat est : " + resultat); // Affiche le résultat de l'opération choisie
    
    if(confirm("Voulez-vous faire un autre calcul ?")){
        location.reload(); // Recharge la page pour recommencer le calcul
    } else {
        alert("Merci d'avoir utilisé la calculatrice !"); // Demande à l'utilisateur s'il veut faire un autre calcul
    }

} catch (error) {
    alert('Une erreur est survenue : ' + error.message);
}

