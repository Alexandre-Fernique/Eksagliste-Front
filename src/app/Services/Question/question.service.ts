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
    console.log(json)
    var listeDeDroite: string = ""
    var voteListeDeDroite: number = 0
    var listeDeGauche: string = ""
    var voteListeDeGauche: number = 0
    console.log("coucou")
    for (var j=0; j<json.listes.length; j++) {
      if (json.listes[j].liste === "BabyListe") {
        console.log("cest egale")
        listeDeDroite = json.listes[j].liste
        voteListeDeDroite = json.listes[j].vote
      } else {
        listeDeGauche = json.listes[j].liste
        voteListeDeGauche = json.listes[j].vote
      }
    }
    return new Question(listeDeGauche, listeDeDroite, json.question, voteListeDeGauche, voteListeDeDroite)
  }

  vote(listId: number, questionId: String) {
    let data = {
      listeId: listId,
      questionId: questionId
    }
    return this.http.post(environment.api + "/question/vote", data, this.httpOptions)
  }

  get(): Observable<Question[]> {
    console.log("coucou")
    return this.http.get<Question[]>(environment.api + "/question/vote", this.httpOptions).pipe(
      map(data =>
        data.map(json => this.jsonToQuestion(json))));
  }

  voteUser() {
    return this.http.get<any>(environment.api + "/question/voteUser", this.httpOptions)
  }

}
