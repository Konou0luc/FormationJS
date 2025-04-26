let h1 = document.querySelector("h1");

// la premire methode de modification de DOM

   // la proprité textContent("") 

   h1.textContent = "Bonjour et merci de votre visite aujourd'hui !";

   // La propriété innerHTML("")

   h1.innerHTML = "<div style='color: red;'>Formation en JavaScript</div>";

   // ecrire juste du texte sur la page
    document.write("mon site fonctionne !");

   // ajouter un element bruite 
   document.body.append("Le meet de se soir n'a pas ra....."); // peut contenir soit du texte, ou un element
   
   document.body.appendChild(document.createTextNode("gggggg")); // ajouter un element dans le body

   h1.append("Bonjour les pro !"); // ajouter un element dans le h1


//    // ajouter les abjet 


   // crer une balise sur la page html

   // etape de création de la balise
let balise = document.createElement("div");

//    la personnalisation de la balise (style : couleur, margin ...)

   balise.textContent = "Bienvenue sur notre site web JS";

//    // L'ajout de la balise dans le DOM (document)

//    // append || appendChild

   document.body.append(balise);


//    // supprimer les elements du DOM

//     // remove || removeChild

    h1.remove();

//     let p = document.querySelector("p"); // recuperation d'une balise p