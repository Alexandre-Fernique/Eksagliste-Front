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
  isChange: number = 0

  constructor(public auth: AuthService,
              public questionService: QuestionService) {
    this.auth.handleAuthentication();
  }

  ngOnInit(): void {
    this.getQuestions()
  }

  getQuestions(){
    this.questionService.get().subscribe(questions => {
        this.questions = questions
        console.log(questions);
      }
    )
  }

  changeDetected($event: number) {
    this.isChange += $event
    this.getQuestions()
    this.getQuestions()
  }

  display : boolean = false

  showQuestions(){
    this.display = !this.display;
  }
}
