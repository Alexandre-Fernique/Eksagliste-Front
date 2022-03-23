import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../Class/question/question";
import {Liste} from "../../Class/liste";
import {ListeService} from "../../Services/Liste/liste.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {QuestionService} from "../../Services/Question/question.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DisplayInfoComponent} from "../display-info/display-info.component";


@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.css']
})
export class QuestionBoxComponent{
  @Input() question! : Question
  liste1:Liste =new Liste(0,"NaN","erreur.png",-1)
  liste2:Liste =new Liste(0,"NaN","erreur.png",-1)
  moreinfo : boolean = false

  @Output() isChangeEvent = new EventEmitter<number>();

  constructor(public listeRequest:ListeService,
              private _snackBar: MatSnackBar,
              public questionService: QuestionService,
              private dialog : MatDialog) {
    this.getListe()
  }

  getListe(){
    this.listeRequest.get().subscribe({
      next:(res)=>{
        for(let data of res){
          if(1 == data.id){
            this.liste1=new Liste(data.id,data.title,data.image,data._count.vote)
          }else{
            this.liste2=new Liste(data.id,data.title,data.image,data._count.vote)
          }
        }
      }
    })
  }

  vote(listeId: number){
    console.log(this.question)
    if(this.question != null) {
      console.log("ici")
      this.questionService.vote(listeId, this.question.questionId)
      this.isChangeEvent.emit(1)
    }
  }

  openSnackBar(text:string) {
    this._snackBar.open(text, '', {
      horizontalPosition: "left",
      verticalPosition: "top",
      duration:3000
    });
  }

  getMoreInfo(){
    this.moreinfo = !this.moreinfo
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "300px";
    dialogConfig.data = {element:this.question}
    let req = this.dialog.open(DisplayInfoComponent,dialogConfig);
    if(req){
      this.moreinfo = !this.moreinfo
      console.log("création catégorie allergene");
    }
    else{
      console.log("Abandon")
    }
  }
}
