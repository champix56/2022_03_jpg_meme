"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initThumbnailView(wrapperNode) {
    //appel xhr mais avec promise ES6
    fetch(location.origin + '/views/meme-thumbnail.html')
        .then(function (f) {
        return f.text();
    })
        .then(function (resp) {
        var domparser = new DOMParser();
        var doc = domparser.parseFromString(resp, 'text/html');
        var wrapperChildren = wrapperNode.querySelectorAll('*');
        if (undefined !== wrapperChildren) {
            wrapperChildren.forEach(function (e) { e.remove(); });
        }
        wrapperNode.appendChild(doc.querySelector('#meme-thumbnail'));
        loadGlobalesMemes(fillMemeThumbnail);
    });
}
exports.default = initThumbnailView;
/**
 * fonction de remplissage du thumbnail
 * @param {Array<Meme>} memes
 */
function fillMemeThumbnail(memes, nodeToFill) {
    console.log(arguments);
    if (undefined === nodeToFill) {
        nodeToFill = document.querySelector('#meme-thumbnail');
    }
    var ulNode = document.createElement('ul');
    memes.forEach(function (e, i) {
        var liNode = document.createElement('li');
        // liNode.innerHTML=e.id+':'+e.name;
        var aNode = document.createElement('a');
        aNode.href = "#";
        aNode.innerHTML = e.id + ':' + e.name;
        aNode.addEventListener('click', function (evt) {
            //stop du comportement par def.
            evt.preventDefault();
            //surcharge de l'url sans reload de page
            history.pushState('', '', '/edit/memes/' + e.id);
            initMemeCreatorView(nodeToFill, e.id);
        });
        liNode.appendChild(aNode);
        ulNode.appendChild(liNode);
    });
    nodeToFill.querySelector('ul').remove();
    nodeToFill.appendChild(ulNode);
}
// loadGlobalesMemes(fillMemeThumbnail);
