import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../Class/question/question";
import {Liste} from "../../Class/liste";
import {ListeService} from "../../Services/Liste/liste.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DisplayInfoComponent} from "../display-info/display-info.component";

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

  constructor(public listeRequest:ListeService,private _snackBar: MatSnackBar, private dialog : MatDialog) {
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
