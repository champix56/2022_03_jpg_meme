"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const meme_thumbnail_js_1 = __importDefault(require("./meme-thumbnail.js"));
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
    if (m === null) {
        home();
        return;
    }
    switch (m.groups.path) {
        case 'thumbnail':
            (0, meme_thumbnail_js_1.default)(document.querySelector('#wrapper'));
            break;
        case 'editor/memes':
            initMemeCreatorView(document.querySelector('#wrapper'));
            break;
    }
    console.log(m.groups.path);
}
function home() {
    document.querySelector('#wrapper').innerHTML = '<div><h1>Hello les petit bretons</h1></div>';
}
