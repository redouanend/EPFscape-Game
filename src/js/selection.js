import * as fct from "/src/js/fonctions.js";

const SKY_IMAGE_KEY = "img_ciel";
const BOOK_IMAGE_KEY = "img_livre";

var clavier;
var livreTexte;

export default class selection extends Phaser.Scene {
  constructor() {
    super({ key: "selection" });
  }

  preload() {
    this.load.image(SKY_IMAGE_KEY, "src/assets/sky.png");
    this.load.image(BOOK_IMAGE_KEY, "src/assets/book.png");
  }

  create() {
    fct.doNothing();
    fct.doAlsoNothing();

    this.add.image(400, 300, SKY_IMAGE_KEY);

    // Ajout de l'image du livre
    const livreImage = this.add.image(400, 300, BOOK_IMAGE_KEY);

    // Ajout du texte sur l'image du livre
    livreTexte = this.add.text(
      livreImage.x - livreImage.width / 2 + 70,
      livreImage.y - livreImage.height / 2 + 80,
      "",
      {
        fontFamily: "Arial",
        fontSize: "17px",
        color: "#000000",
      }
    );

    // Ajout de la fonctionnalité d'affichage lettre par lettre
    this.time.delayedCall(100, this.afficherTexteLettreParLettre, [], this);
  }

  update() {
    // Vous pouvez ajouter ici des logiques de mise à jour si nécessaire
  }

  afficherTexteLettreParLettre() {
    const texteComplet = "Bonjour jeune peufien,\n\nJe suis ton responsable pédagogique.\n\nIl te manque malheureusement 8 crédits\n\npour valider le semestre.Tu dois te rendre\n\ndans les salles M01,M02 et M03 à la\n\nrencontre de tes professeurs pour discuter\n\nde ton cas.\n\n\n                                                                                                  Bonne chance !!!";
    let textePartiel = "";
    let indexLettre = 0;

    this.time.addEvent({
      repeat: texteComplet.length - 1,
      delay: 50,
      callback: function () {
        textePartiel += texteComplet[indexLettre];
        livreTexte.setText(textePartiel);
        indexLettre++;
      },
      callbackScope: this,
    });
  }
}
