import { Component } from '@angular/core';
import {AuthService} from "../../Services/Auth/auth.service";
import {FormControl, Validators} from "@angular/forms";

import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../Services/Post/post.service";



@Component({
  selector: 'app-advice-box',
  templateUrl: './advice-box.component.html',
  styleUrls: ['./advice-box.component.css']
})
export class AdviceBoxComponent {
  text = new FormControl("",[Validators.required])

  constructor(public auth: AuthService,public post:PostService,private _snackBar: MatSnackBar) {

  }
  openSnackBar(text:string) {
    this._snackBar.open(text, '', {
      horizontalPosition: "left",
      verticalPosition: "top",
      duration:3000
    });
  }
  send(){
    this.post.create(this.text.value).subscribe({
      error:(e)=>{

        this.openSnackBar("Il faut être connecté")

      },complete:()=>{
        this.openSnackBar("Message envoyé")
        this.text.setValue("")

      }
    })
  }

}
