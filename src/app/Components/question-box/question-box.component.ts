import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../Class/question/question";
import {Liste} from "../../Class/liste";
import {ListeService} from "../../Services/Liste/liste.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.css']
})
export class QuestionBoxComponent{
  @Input() question : Question = new Question()
  liste1:Liste =new Liste(0,"NaN","erreur.png",-1)
  liste2:Liste =new Liste(0,"NaN","erreur.png",-1)
  moreinfo : boolean = false

  constructor(public listeRequest:ListeService,private _snackBar: MatSnackBar) {
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

  openSnackBar(text:string) {
    this._snackBar.open(text, '', {
      horizontalPosition: "left",
      verticalPosition: "top",
      duration:3000
    });
  }

  getMoreInfo(){
    this.moreinfo = !this.moreinfo
  }
}
