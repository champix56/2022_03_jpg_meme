/**
 * constructeur d'un objet meme
 */
function Meme(){
    this.name='';
    this.text='';
    this.x=0;
    this.y=0;
    this.fontSize=12;
    this.fontWeight='900';
    this.underline=false;
    this.italic=false;
    this.color='#000000';
    this.image='futurama-suicide.jpg';
    console.log('forme Meme construite',this);
}
// objet dont la forme ne PEUX PAS CHANGER
var unMemeGlobal=Object.seal(new Meme());