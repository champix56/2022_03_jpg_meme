/* 
ne JAMAIS utiliser les "alert" ou "confirm"
privilegier les MODAL

alert('Hello');
 var etatpersonnel=confirm('Allez vous bien today?');
 if(etatpersonnel){
     console.log('Ok je vais bien aussi');
     console.log(etatpersonnel);
 }
 else{
     console.log('Ne nous raconte pas ta vie on est q\'un ordinateur');
 }
 */
//selection de la balise a manipuler
var baliseJsLoaded=document.querySelector("#isJsLoaded");
//edition dui contenu de la balise contenu dans la avriable
baliseJsLoaded.innerHTML="JS loaded";
//edition du comportement de style de la balise
baliseJsLoaded.style.backgroundColor="skyblue";

console.log('Le js est chargé',baliseJsLoaded);