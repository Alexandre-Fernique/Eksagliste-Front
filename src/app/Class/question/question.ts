export class Question {
  questionId: string
  listeGauche : string
  listeGaucheId: number
  listeDroite : string
  listeDroiteId: number
  question : string
  nbVoteGauche : number
  nbVoteDroite : number
  colorGauche : string
  colorDroite : string

  constructor(questionId: string, listeGauche: string = "", listeDroite: string = "", question: string = "", nbVoteGauche: number = 0,
               nbVoteDroite: number = 0, listeDroiteId: number, listeGaucheId: number, colorGauche : string = "red", colorDroite : string = "green") {
    this.questionId = questionId;
    this.listeGauche = listeGauche;
    this.listeDroite = listeDroite;
    this.question = question;
    this.nbVoteGauche = nbVoteGauche;
    this.nbVoteDroite = nbVoteDroite;
    this.colorGauche = colorGauche;
    this.colorDroite = colorDroite;
    this.listeDroiteId = listeDroiteId;
    this.listeGaucheId = listeGaucheId;
  }

  get nbVoteTotal() {
    return this.nbVoteDroite + this.nbVoteGauche
  }

  get percentage(){
    if(this.nbVoteTotal == 0){
      return 50
    }
    else {
      return 100 * (this.nbVoteGauche / this.nbVoteTotal)
    }
  }
}

