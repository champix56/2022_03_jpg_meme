"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadGlobalesImages = exports.listeGlobalImages = exports.loadGlobalesMemes = exports.unMemeGlobal = exports.Meme = void 0;
const CRUD_js_1 = require("./CRUD.js");
const config_js_1 = require("./config/config.js");
/**
 * constructeur d'un objet meme
 */
function Meme() {
    this.id = undefined;
    this.name = '';
    this.text = '';
    this.x = 0;
    this.y = 0;
    this.fontSize = 12;
    this.fontWeight = '900';
    this.underline = false;
    this.italic = false;
    this.color = '#000000';
    this.imageId = 1; // 'futurama-suicide.jpg';
    console.log('forme Meme construite', this);
    /**
     * set meme values to demo values
     */
    this.setDummyValues = function createDummyMeme() {
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
    };
}
exports.Meme = Meme;
// objet dont la forme ne PEUX PAS CHANGER
exports.unMemeGlobal = Object.seal(new Meme());
exports.unMemeGlobal.setDummyValues();
/**
 * instance d'acces au serveur de data rest
 */
var callerRestHTTP = new CRUD_js_1.CRUD(config_js_1.ARD_REST_SRV);
var memes = [];
function loadGlobalesMemes(clbk) {
    callerRestHTTP.get('/memes', function (response) {
        memes = JSON.parse(response);
        clbk(memes);
    });
}
exports.loadGlobalesMemes = loadGlobalesMemes;
exports.listeGlobalImages = [];
function loadGlobalesImages(callback) {
    callerRestHTTP.get('/images', function (response) {
        exports.listeGlobalImages = JSON.parse(response);
        callback(exports.listeGlobalImages);
    });
}
exports.loadGlobalesImages = loadGlobalesImages;
