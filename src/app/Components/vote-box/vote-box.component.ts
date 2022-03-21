import {Component, Input} from '@angular/core';
import {ListeService} from "../../Services/Liste/liste.service";
import {Liste} from "../../Class/liste";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-vote-box',
  templateUrl: './vote-box.component.html',
  styleUrls: ['./vote-box.component.css']
})
export class VoteBoxComponent {
  liste1:Liste =new Liste(0,"NaN","erreur.png",-1)
  liste2:Liste =new Liste(0,"NaN","erreur.png",-1)
  userVote:null|number=null
  constructor(public listeRequest:ListeService,private _snackBar: MatSnackBar) {
    this.getVote()

  }
  openSnackBar(text:string) {
    this._snackBar.open(text, '', {
      horizontalPosition: "left",
      verticalPosition: "top",
      duration:3000
    });
  }
  getVote(){
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
    this.listeRequest.voteUser().subscribe({
      next:(res)=>{
        if(res!=null){
          this.userVote= res.listeId
        }


      }

    })
  }



  vote(liste : Liste){
    this.listeRequest.vote(liste.id).subscribe({
      error:()=>{
        this.openSnackBar("Il faut que tu sois connecter")
      },
      complete:()=>{
        this.openSnackBar("Vote pris en compte")
        this.getVote()
      }
    })

  }

}
