/**
 * instanciation d'un objet CRUD pour rest ou http
 * @param {string} restAdr base url d'appel ex : http://localhost
 */
export function CRUD(restAdr) {

    /**
     * Fonction generique pour appel XHR
     * @param {string} ressourceUrl commence par /
     * @param {Function} successCallback conction de traitement du resultat success 
     * @param {string} method method HTTP pour l'appel  def. GET
     * @param {number} id surcharge de l'id de la ressource pour la creation de l'url 
     * @param {(object|Array|string|number} body contenu objet, array, number, ou string du contenu (les object/array serons traités par JSON.stringify) 
     * @param {string} contentType contenu du header Content-Type
     * @param {Function} unsuccessCallback fonction de traitement du resultat non valid unsuccess 
     * 
     */
    this.callXHR = function (ressourceUrl, successCallback, method, id, body, contentType, unsuccessCallback) {
        if (undefined === ressourceUrl) {
            //traitement d'erreur lacces ressource sur le serveur n'est pas fournit
            console.log('%c%s', 'color:red;font-weight:900;font-size:20pt', 'callXHR ressourceName not given !!!')
            return;
        }
        if (undefined === method) {
            //gestion d'une methode GET par def. si pas fournit
            method = 'GET';
        }

        //instanciation d'un objet XMLHttpRequest
        var xhr = new XMLHttpRequest();

        //preparation de l'objet pour lappel (ouverture)
        var fullUrl = restAdr + ressourceUrl;
        if (undefined !== id) { fullUrl += '/' + id; }
        xhr.open(method, fullUrl);


        //facultatif (uniquement si fournit en param)... gestion de lentete de type de contenu de body
        if (undefined !== contentType) { xhr.setRequestHeader("Content-Type", contentType); }

        //gestion de levent de changement d'etat
        xhr.onreadystatechange = function (evt) {
            //gestion des phase non complete de reception de reponse
            if (xhr.readyState < XMLHttpRequest.DONE) { return; }
            //echapement sans gestion des erreurs (404, 403, 500, ..)
            if (xhr.status >= 400) {
                //execution que si fournit et une fonction est presente pour le traitement de l'erreur de l'appel
                if (undefined !== unsuccessCallback && typeof (unsuccessCallback) === 'function') {
                    unsuccessCallback(xhr);
                }
                return;
            }
            if (undefined !== successCallback && typeof (successCallback) === 'function') {
                //execution de la fonction success que si le param est fournit et que le param est bien de type fonction
                successCallback(xhr.response);
            }
        }
        //send request
        //gestion du content de body
        if (typeof (body) === 'object') {
            body = JSON.stringify(body);
        }
        xhr.send(body);
        console.log('SENT ' + method + ' ' + fullUrl);
    }
    /**
     * fonction get pour appel get XHR
     * @param {string} ressourceUrl base de l'url de la ressource
     * @param {Function} successCallback traitement callback en cas de reussite
     * @param {number} id id optionnel de la ressource de liste
     * @param {Function} unsuccessCallback traitement callback en cas d'echec
     */
    this.get = function (ressourceUrl, successCallback, id, unsuccessCallback) {
        this.callXHR(ressourceUrl, successCallback, 'GET', id, undefined, undefined, unsuccessCallback)
    }
    /**
     * fonction de post vers une liste d'un nouvelle element de la liste
     * @param {string} ressourceUrl base d'adresse de la ressource liste 
     * @param {Function} successCallback conction de traitement du resultat success 
     * @param {(object|Array|string|number} body contenu objet, array, number, ou string du contenu (les object/array serons traités par JSON.stringify) 
     * @param {string} contentType contenu du header Content-Type
     * @param {Function} unsuccessCallback traitement callback en cas d'echec
     */
    this.post = function (ressourceUrl, successCallback, body, contentType, unsuccessCallback) {
        this.callXHR(ressourceUrl, successCallback, 'POST', undefined, body, contentType, unsuccessCallback);
    }
    /**
     * fonction d'update integral(remplacement) d'une ressource existante d'une liste
     * @param {string} ressourceUrl base d'adresse de la ressource liste 
     * @param {Function} successCallback conction de traitement du resultat success 
     * @param {number} id id de la la ressource dans la liste
     * @param {(object|Array|string|number} body contenu objet, array, number, ou string du contenu (les object/array serons traités par JSON.stringify) 
     * @param {string} contentType contenu du header Content-Type
     * @param {Function} unsuccessCallback traitement callback en cas d'echec
     */
    this.put = function (ressourceUrl, successCallback, id, body, contentType, unsuccessCallback) {
        this.callXHR(ressourceUrl, successCallback, 'PUT', id, body, contentType, unsuccessCallback);
    }
    /**
    * fonction d'update partiel d'une ressource existante d'une liste
    * @param {string} ressourceUrl base d'adresse de la ressource liste 
    * @param {Function} successCallback conction de traitement du resultat success 
    * @param {number} id id de la la ressource dans la liste
    * @param {(object|Array|string|number} body contenu objet, array, number, ou string du contenu (les object/array serons traités par JSON.stringify) 
    * @param {string} contentType contenu du header Content-Type
    * @param {Function} unsuccessCallback traitement callback en cas d'echec
    */
    this.patch = function (ressourceUrl, successCallback, id, body, contentType, unsuccessCallback) {
        this.callXHR(ressourceUrl, successCallback, 'PATCH', id, body, contentType, unsuccessCallback);
    }
    /**
     * fonction de suppression de ressource d'une liste
     * @param {string} ressourceUrl base url de la ressource de liste à suppr. 
     * @param {number} id id de la ressource dans la liste
     * @param {Function} successCallback traitement en cas de reussite de la requette
     * @param {Function} unsuccessCallback traitement cas d'echac de la demande
     */
    this.remove = function (ressourceUrl, id, successCallback, unsuccessCallback) {
        this.callXHR(ressourceUrl, successCallback, 'DELETE', id, undefined, undefined, unsuccessCallback);
    }
}

