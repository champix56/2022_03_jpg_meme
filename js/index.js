//selection de la balise a manipuler
var baliseJsLoaded=document.querySelector("#isJsLoaded");
//edition dui contenu de la balise contenu dans la avriable
baliseJsLoaded.innerHTML="JS loaded";
//edition du comportement de style de la balise
baliseJsLoaded.style.backgroundColor="skyblue";

console.log('Le js est chargé',baliseJsLoaded);