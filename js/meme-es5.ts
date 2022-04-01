import { CRUD } from './CRUD.js'
import { ARD_REST_SRV } from './config/config.js'
/**
 * constructeur d'un objet meme
 */

export class Meme {
    id = undefined;
    name = '';
    text = '';
    x = 0;
    y = 0;
    fontSize = 12;
    fontWeight = '900';
    underline = false;
    italic = false;
    color = '#000000';
    imageId = 1;// 'futurama-suicide.jpg';
    constructor(imageId:number = 2) {
        this.imageId = imageId;
    }
    setDummyValues = () => {
        this.name = 'Dummy demo meme';
        this.text = 'Breizh ma bro';
        this.x = 50;
        this.y = 50;
        this.fontSize = 20;
        this.fontWeight = '900';
        this.underline = true;
        this.italic = false;
        this.color = '#ACACAC';
        this.imageId = 1;
    }
}

// export function Meme() {
//     this.id = undefined;
//     this.name = '';
//     this.text = '';
//     this.x = 0;
//     this.y = 0;
//     this.fontSize = 12;
//     this.fontWeight = '900';
//     this.underline = false;
//     this.italic = false;
//     this.color = '#000000';
//     this.imageId =1;// 'futurama-suicide.jpg';
//     console.log('forme Meme construite', this);
//     /**
//      * set meme values to demo values
//      */
//     this.setDummyValues = function createDummyMeme() {
//         this.name = 'Dummy demo meme';
//         this.text = 'Breizh ma bro';
//         this.x = 50;
//         this.y = 50;
//         this.fontSize = 20;
//         this.fontWeight = '900';
//         this.underline = true;
//         this.italic = false;
//         this.color = '#ACACAC';
//         this.imageId = 1;
//     }
// }
// objet dont la forme ne PEUX PAS CHANGER
export let unMemeGlobal:Meme = Object.seal(new Meme());
unMemeGlobal.setDummyValues();

/**
 * instance d'acces au serveur de data rest
 */
var callerRestHTTP = new CRUD(ARD_REST_SRV);

var memes = [];
export function loadGlobalesMemes(clbk:Function) {
    callerRestHTTP.get('/memes', function (response) {
        memes = JSON.parse(response);
        clbk(memes);
    });
}

export let listeGlobalImages = [];

export function loadGlobalesImages(callback) {
    callerRestHTTP.get('/images', function (response) {
        listeGlobalImages = JSON.parse(response);
        callback(listeGlobalImages);
    });
}