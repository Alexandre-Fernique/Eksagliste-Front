import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Question} from "../../Class/question/question";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
  }

  jsonToQuestion(json: any): Question {
    var listeDeDroite: string = ""
    var voteListeDeDroite: number = 0
    var listeDeGauche: string = ""
    var voteListeDeGauche: number = 0
    var listeDeDroiteId: number = 0
    var listeDeGaucheId: number = 0
    for (var j=0; j<json.listes.length; j++) {
      if (json.listes[j].liste === "Polyçao") {
        listeDeDroite = json.listes[j].liste
        voteListeDeDroite = json.listes[j].vote
        listeDeDroiteId = json.listes[j].id
      } else {
        listeDeGauche = json.listes[j].liste
        voteListeDeGauche = json.listes[j].vote
        listeDeGaucheId = json.listes[j].id
      }
    }
    return new Question(json.questionId, listeDeGauche, listeDeDroite, json.question, voteListeDeGauche, voteListeDeDroite, listeDeDroiteId, listeDeGaucheId)
  }

  vote(listId: number, questionId: String) {
    let data = {
      question: questionId,
      liste: listId
    }
    console.log(data)
    return this.http.post(environment.api + "/question/vote", data, this.httpOptions).subscribe()
  }

  get(): Observable<Question[]> {
    return this.http.get<Question[]>(environment.api + "/question/vote", this.httpOptions).pipe(
      map(data =>
        data.map(json => this.jsonToQuestion(json))));
  }

  voteUser() {
    return this.http.get<any>(environment.api + "/question/voteUser", this.httpOptions)
  }

}
