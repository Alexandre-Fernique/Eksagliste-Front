import { Component } from '@angular/core';
import {AuthService} from "../../Services/Auth/auth.service";
import {Question} from "../../Class/question/question";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  questions : Question[] = [
    new Question("Flibustech","Polyçao","Qui est le plus rapide pour livrer ?",0,0),
    new Question("Flibustech","Polyçao","Qui prépare les meilleures crêpes ?",75,32),
    new Question("Flibustech","Polyçao","Qui est le plus chaud ?",60,85),
    new Question("Flibustech","Polyçao","Qui est le plus riche ?",80,23),
    new Question("Flibustech","Polyçao","Qui a le plus de goodies ?",103,10),
    new Question("Flibustech","Polyçao","Qui cuisine le mieux ?",25,57),
    new Question("Flibustech","Polyçao","Qui est le meilleur à Mario Kart ?",8,66)
  ]
  display : boolean = false
  constructor(public auth: AuthService) {
    this.auth.handleAuthentication();
  }

  showQuestions(){
    this.display = !this.display;
  }

}
