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
    new Question("Flibustech","Polyçao","Qui est le plus rapide pour livrer ?",25,75),
    new Question("Flibustech","Polyçao","Qui prépare les meilleures crêpes ?",75,32)
  ]

  constructor(public auth: AuthService) {
    this.auth.handleAuthentication();
  }

}
