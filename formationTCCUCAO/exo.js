// let nom = "jean";
// let prenom = 'Luc';

// let nombre = 10;

// let plus = true;

// console.log(typeof(true));


// // les operateurs

// - "+" : addition
// - "-" : soustraction
// - "*" : multiplication
// - "/" : division
// - "%" : modulo (reste de la division entière)
// - "**" : puissance

// // conditions

let ageMr = 10;

if(ageMr >= 18){
    console.log("Vous etes majeur !");
}else{
    console.log("Vous etes mineur !");
}


// Affichage des informations aux utilisateurs

// alert("Bonjour ! Bienvenue sur notre site !");

// demander le nom de l'utilisateur

let age = parseInt(prompt("Donnez votre age ?"));

if(isNaN(age)){
    alert("Vous n'avez pas saisi un nombre !");
}else{
    alert("Vous avez " + age + " ans.");
}



if(confirm("Etes-vous sur de vouloir supprimer cet élément ?")){

    alert("L'élément a été supprimé !");
}else{
    alert("L'élément n'a pas été supprimé !");
}

//Fonction en javaScript

function RecupererNom(prenom){
    console.log("Bonjour Mr x " + prenom);
}
RecupererNom("Jean");




function AfficherNom(){
    console.log('Fonction sans parametre !');
}
AfficherNom();



//Exercice 1 : Calcul de la moyenne de trois notes

let note1 = parseFloat(prompt("Entrez la première note :")); // Demande à l'utilisateur d'entrer la première note
let note2 = parseFloat(prompt("Entrez la deuxième note :")); // Demande à l'utilisateur d'entrer la deuxième note
let note3 = parseFloat(prompt("Entrez la troisième note :")); // Demande à l'utilisateur d'entrer la troisième note

// Vérification si les notes sont valides
if (isNaN(note1) || isNaN(note2) || isNaN(note3)) {
    alert("Veuillez entrer des nombres valides pour toutes les notes.");
} else {
    // Calcul de la moyenne
    let moyenne = (note1 + note2 + note3) / 3;
}

// Affichage de la moyenne
alert("La moyenne est : " + moyenne);  // Affichage du résultat     
if (moyenne >= 10) {
    alert("Admis");
} else {
    alert("Échoué ");
}








