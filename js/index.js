import initThumbnailView  from './meme-thumbnail.js'
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

        manageRoutes();
}
document.addEventListener('DOMContentLoaded', lorsDuChargementDeLaPage);

function manageRoutes() {
        const path = location.pathname;
        const regex = /\/?(?<path>(editor\/memes)|thumbnail)(\/(?<id>\d+))?/;
        let m = regex.exec(path);

        if (m === null) { home(); return; }
        switch (m.groups.path) {
                case 'thumbnail':
                        initThumbnailView(document.querySelector('#wrapper'));
                        break;
                case 'editor/memes':
                        initMemeCreatorView(document.querySelector('#wrapper'));
                        break;
        }
        console.log(m.groups.path);

}
function home() {

        document.querySelector('#wrapper').innerHTML = '<div><h1>Hello les petit bretons</h1></div>'

}
