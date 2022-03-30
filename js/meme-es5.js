/**
 * constructeur d'un objet meme
 */
function Meme() {
    this.id = undefined;
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
        this.image = 'futurama-suicide.jpg';
    }
}
// objet dont la forme ne PEUX PAS CHANGER
var unMemeGlobal = Object.seal(new Meme());
unMemeGlobal.setDummyValues();