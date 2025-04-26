let container = document.querySelector(".container"); // recuperation d'un bouton
let btn = document.querySelector("button"); // recuperation d'un bouton
let content1 = document.querySelector(".content1"); // recuperation d'un bouton
let start_button = document.querySelector(".start-button");
let begin = document.querySelector("#begin"); // recuperation d'un bouton


/*Les styles CSS appliqués */

container.style.height = "100%"; // hauteur de 100%
container.style.backgroundColor = "grey"; // ajout d'une couleur de fond
container.style.margin = "0 auto"; // centrer le conteneur
container.style.display = "flex"; // ajout d'un affichage flex
container.style.alignItems = "center"; // centrer le texte
container.style.justifyContent = "center"; // centrer le texte
container.style.padding = "20px 50px"; // ajout d'une taille de police

content1.style.display = "block";
start_button.style.padding = "10px 30px"; // ajout d'un padding
start_button.style.fontSize = "20px"; // ajout d'une taille de police
start_button.style.backgroundColor = "green"; // ajout d'une couleur de fond
start_button.style.border = "none"; // ajout d'une bordure
start_button.style.borderRadius = "5px"; // ajout d'une bordure arrondie
start_button.style.cursor = "pointer"; // ajout d'un curseur de pointeur
start_button.style.transition = "all 0.3s ease"; // ajout d'une transition
start_button.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)"; // ajout d'une ombre
start_button.style.color = "white"; // ajout d'une couleur de texte
start_button.style.fontWeight = "bold"; // ajout d'une graisse de texte

/* Fin de style */


// logique pour le timer


let secondes = 10;
var interval;

btn.addEventListener('click', start);

function start(){
    interval = setInterval(decompte, 1000);
}

function decompte(){
    secondes --;
    if(secondes < 0){
        stop();
    }else{
        begin.innerHTML = "Il reste " + secondes + " secondes !"; // changement de la couleur de fond
        begin.style.color = "black"; // ajout d'une couleur de texte
    }
}



function stop(){
    clearInterval(interval);
    begin.innerHTML = "Le temps est écoulé !"; // changement de la couleur de fond
    begin.style.color = "pink"; // ajout d'une couleur de texte
}

