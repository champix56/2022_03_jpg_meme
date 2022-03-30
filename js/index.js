/**
 * fonction d'activation du js
 */
function lorsDuChargementDeLaPage() {
    //selection de la balise a manipuler
    var baliseJsLoaded = document.querySelector("#isJsLoaded");
    //edition dui contenu de la balise contenu dans la avriable
    baliseJsLoaded.innerHTML = "JS loaded";
    baliseJsLoaded.className = "isLoaded";
    console.log('Le js est chargé', baliseJsLoaded);
}
document.addEventListener('DOMContentLoaded',lorsDuChargementDeLaPage);

function setMemeOnSVGViewer(meme) {
    //gestion d'un valeur par default
    if(undefined===meme){
        meme=new Meme();
        meme.setDummyValues();
    }
    //selection du noeud text enfant de svg
    var svgTextNode=document.querySelector('svg>text');
    // moddif du contenu HTML de la balise 
    svgTextNode.innerHTML=meme.text;
    
    // x avec decomposition 
    var attrib=svgTextNode.attributes['x'];
    attrib.value=meme.x;

    //y sans decomposition
    svgTextNode.attributes['y'].value=meme.y;

    //moddif d'une valeur dans l'attribut style (pour le css enligne)
    svgTextNode.style.fontWeight=meme.fontWeight;

    //fontSize
    svgTextNode.attributes['font-size'].value=meme.fontSize;

    //fill
    svgTextNode.attributes['fill'].value=meme.color;
    
    //remplissage contionnel avec test ternaire (if et else)
    svgTextNode.style.fontStyle=(meme.italic ? 'italic':'normal');

    //remplissage contionnel avec test ternaire (if et else)
    svgTextNode.style.textDecoration=(meme.underline ? 'underline':'none');
}