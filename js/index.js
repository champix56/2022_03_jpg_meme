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
    initFormEvents();
}
document.addEventListener('DOMContentLoaded', lorsDuChargementDeLaPage);
/**
 * affiche le meme en parm dans le viewer svg
 * @param {Meme} meme un meme instancier def. demo meme si undefined
 */
function setMemeOnSVGViewer(meme) {
    //gestion d'un valeur par default
    if (undefined === meme) {
        meme = new Meme();
        meme.setDummyValues();
    }
    //selection du noeud text enfant de svg
    var svgTextNode = document.querySelector('svg>text');
    // moddif du contenu HTML de la balise 
    svgTextNode.innerHTML = meme.text;

    // x avec decomposition 
    var attrib = svgTextNode.attributes['x'];
    attrib.value = meme.x;

    //y sans decomposition
    svgTextNode.attributes['y'].value = meme.y;

    //moddif d'une valeur dans l'attribut style (pour le css enligne)
    svgTextNode.style.fontWeight = meme.fontWeight;

    //fontSize
    svgTextNode.attributes['font-size'].value = meme.fontSize;

    //fill
    svgTextNode.attributes['fill'].value = meme.color;

    //remplissage contionnel avec test ternaire (if et else)
    svgTextNode.style.fontStyle = (meme.italic ? 'italic' : 'normal');

    //remplissage contionnel avec test ternaire (if et else)
    svgTextNode.style.textDecoration = (meme.underline ? 'underline' : 'none');
}
/**
 * init tous les events sur les inputs du form
 */
function initFormEvents() {
    document
        .forms["meme-form"]["meme-text"]
        .addEventListener('input', function (evt) {
                unMemeGlobal.text=evt.target.value;
                setMemeOnSVGViewer(unMemeGlobal);
        });
        document
        .forms["meme-form"]["meme-name"]
        .addEventListener('change', function (evt) {
                unMemeGlobal.name=evt.target.value;
                setMemeOnSVGViewer(unMemeGlobal);
        });
        document
        .forms["meme-form"]["meme-x"]
        .addEventListener('input', function (evt) {
                unMemeGlobal.x=evt.target.value;
                setMemeOnSVGViewer(unMemeGlobal);
        });
        document
        .forms["meme-form"]["meme-y"]
        .addEventListener('input', function (evt) {
                unMemeGlobal.y=evt.target.value;
                setMemeOnSVGViewer(unMemeGlobal);
        });
        document
        .forms["meme-form"]["meme-fontWeight"]
        .addEventListener('input', function (evt) {
                unMemeGlobal.fontWeight=evt.target.value;
                setMemeOnSVGViewer(unMemeGlobal);
        });
        document
        .forms["meme-form"]["meme-fontSize"]
        .addEventListener('input', function (evt) {
                unMemeGlobal.fontSize=evt.target.value;
                setMemeOnSVGViewer(unMemeGlobal);
        });

        document
        .forms["meme-form"]["meme-underline"]
        .addEventListener('input', function (evt) {
                unMemeGlobal.underline=evt.target.checked;
                setMemeOnSVGViewer(unMemeGlobal);
        });
        document
        .forms["meme-form"]["meme-italic"]
        .addEventListener('input', function (evt) {
                unMemeGlobal.italic=evt.target.checked;
                setMemeOnSVGViewer(unMemeGlobal);
        });
        document
        .forms["meme-form"]["meme-color"]
        .addEventListener('input', function (evt) {
                unMemeGlobal.color=evt.target.value;
                setMemeOnSVGViewer(unMemeGlobal);
        });
        setMemeValuesInFormInputs(unMemeGlobal);
}
/**
 * set meme values in all inputs 
 * @param {Meme} meme 
 */
function setMemeValuesInFormInputs(meme) {
    if(undefined===meme){return;}
    var form=document.forms["meme-form"];
    form["meme-name"].value=meme.name;
    form["meme-text"].value=meme.text;
    form["meme-x"].value=meme.x;
    form["meme-y"].value=meme.y;
    form["meme-fontWeight"].value=meme.fontWeight;
    form["meme-fontSize"].value=meme.fontSize;
    form["meme-underline"].checked=meme.underline;
    form["meme-italic"].checked=meme.italic;
    form["meme-color"].value=meme.color;
    setMemeOnSVGViewer(meme);
}