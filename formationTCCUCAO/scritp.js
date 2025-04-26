function addition(nombreA, nombreB, nombreC){
    return nombreA + nombreB + nombreC;
}

function soustration(nombreA, nombreB){
    return nombreA - nombreB;
}

function multiplication(nombreA, nombreB){
    return nombreA * nombreB;
}

function division(nombreA, nombreB){
    if(nombreB == 0){
        alert("Impossible de diviser ce nombre par 0 !");
        return null;
    }else{
        return nombreA / nombreB;
    }
}


do {
    
var  choix = Number(prompt("Bonjour Mr ! Quels opération  voulez-vous effectuer ? \n\n 1-Addition \n 2-Muliplication \n 3-Soustration \n 4-Division"));
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);


do {
    var premierNombre = Number(prompt("Entrez le premier nombre : "));
    var deuxiemeNombre = Number(prompt("Entrez le deuxieme nombre : "));
    var troisiemeNombre = Number(prompt("Entrez le troisieme nombre : "));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));


try {
    
switch (choix) {
    case 1:
        var resultat = addition(premierNombre, deuxiemeNombre, troisiemeNombre);
        break;

    case 2:
        var resultat = multiplication(premierNombre, deuxiemeNombre);
        break;
    case 3:
        var resultat = soustration(premierNombre, deuxiemeNombre);
        break;
    case 4:
        var resultat = division(premierNombre, deuxiemeNombre);
        break;  
    default:
        throw new Error('Une erreur est survenue lors de l\'operation !');
}

alert("Le resultat de votre opération est : " + resultat);
} catch (error) {
    alert("Erreur veuillez revenir plutars !");
}