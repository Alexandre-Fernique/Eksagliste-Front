export class Question {
  listeGauche : string
  listeDroite : string
  question : string
  nbVoteGauche : number
  nbVoteDroite : number
  colorGauche : string
  colorDroite : string

  constructor(listeGauche: string = "", listeDroite: string = "", question: string = "", nbVoteGauche: number = 0, nbVoteDroite: number = 0, colorGauche : string = "red", colorDroite : string = "green") {
    this.listeGauche = listeGauche;
    this.listeDroite = listeDroite;
    this.question = question;
    this.nbVoteGauche = nbVoteGauche;
    this.nbVoteDroite = nbVoteDroite;
    this.colorGauche = colorGauche
    this.colorDroite = colorDroite
  }

  get nbVoteTotal() {
    return this.nbVoteDroite + this.nbVoteGauche
  }

  get percentage(){
    return 100 * (this.nbVoteGauche / this.nbVoteTotal)
  }

}

