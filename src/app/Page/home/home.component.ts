import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Services/Auth/auth.service";
import {Question} from "../../Class/question/question";
import {QuestionService} from "../../Services/Question/question.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  questions!: Question[];

  constructor(public auth: AuthService,
              public questionService: QuestionService) {
    this.auth.handleAuthentication();
  }

  ngOnInit(): void {
        this.questions = this.questionService.get()
    }



}
