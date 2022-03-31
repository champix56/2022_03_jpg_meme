/**
 * instanciation d'un objet CRUD pour rest ou http
 * @param {string} restAdr base url d'appel ex : http://localhost
 */
function CRUD(restAdr) {
    /**
     * Fonction generique pour appel XHR
     * @param {string} ressourceUrl commence par /
     * @param {Function} callback conction de traitement du resultat success 
     * @param {string} method method HTTP pour l'appel  def. GET
     * @param {number} id surcharge de l'id de la ressource pour la creation de l'url 
     * @param {(object|Array|string|number} body contenu objet, array, number, ou string du contenu (les object/array serons traités par JSON.stringify) 
     * @param {string} contentType contenu du header Content-Type
     */
    this.callXHR=function(ressourceUrl,callback,method,id,body,contentType){
        if(undefined===ressourceUrl){
            //traitement d'erreur lacces ressource sur le serveur n'est pas fournit
            console.log('%c%s','color:red;font-weight:900;font-size:20pt','callXHR ressourceName not given !!!')
            return;
        }
        if(undefined===method){
            //gestion d'une methode GET par def. si pas fournit
            method='GET';
        }
        
        //instanciation d'un objet XMLHttpRequest
        var xhr=new XMLHttpRequest();
        
        //preparation de l'objet pour lappel (ouverture)
        var fullUrl=restAdr+ressourceUrl;
        if(undefined!==id){fullUrl+='/'+id;}
        xhr.open(method,fullUrl);


        //facultatif (uniquement si fournit en param)... gestion de lentete de type de contenu de body
        if(undefined!==contentType){xhr.setRequestHeader("Content-Type",contentType);}

        //gestion de levent de changement d'etat
        xhr.onreadystatechange=function(evt){
            //gestion des phase non complete de reception de reponse
            if(xhr.readyState<XMLHttpRequest.DONE){return;}
            //echapement sans gestion des erreurs (404, 403, 500, ..)
            if(xhr.status>=400){return;}
            console.log(xhr.response);
        }
        //send request
            //gestion du content de body
            if(typeof(body) === 'object'){
                body=JSON.stringify(body);
            }
        xhr.send(body);
        console.log('SENT '+ method+' '+fullUrl);
    }
}
// var xhr=new CRUD('http://localhost:5679');
// xhr.callXHR('/images',function(){},'POST',undefined,{ch1:'hello'},'application/json');