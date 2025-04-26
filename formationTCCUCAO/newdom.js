let link = document.querySelector(".link"); // recuperation d'un lien
let btn = document.querySelector("button"); // recuperation d'un bouton

link.onclick = function(){
    if(confirm("Etes vous sur d'aller sur le site ?")){
        location.href = "https://work.go.yj.fr/formation/"
    }else{
        alert("Vous n'etes pas sur d'aller sur le site !")
    }
}

btn.onmouseover = function(){
    document.body.style.backgroundColor = "red"; // changement de la couleur de fond
}
btn.onmouseout = () =>{ 
    document.body.style.backgroundColor = "white"; // changement de la couleur de fond                  
}   

//addEventListener => permet d'ajouter un evenement sur un element (click , mouseover, mouseout, keydown, keyup, change, input, focus, blur, submit, etc...)

btn.addEventListener("mouseover", function(){
    document.body.style.fontSize = "50px";
});

btn.addEventListener("mouseout", function(){
    document.body.style.fontSize = "15px";
    document.body.style.backgroundColor = "blue"; // changement de la couleur de fond
});


let CliqueMoi  = document.querySelector("#CliqueMoi"); // recuperation d'un bouton
let compteur = 0;

CliqueMoi.addEventListener("click", function() {
    compteur++;
    document.getElementById("compter").innerHTML = "Vous avez cliqué " + compteur + " fois !"; // changement de la couleur de fond
});