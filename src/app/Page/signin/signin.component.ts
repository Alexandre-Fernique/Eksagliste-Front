import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {UserService} from "../../Services/User/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  hidePassword = true;
  hideConfirmPassword = true
  erreur=false;
  annees=[1,2,3,4,5]
  formations=["PEIP","IG","MI","MSI","EGC","STE","SE","MEA","MAT","DO","GBA"]

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value
    return pass === confirmPass ? null : { notSame: true }
  }
  form: FormGroup = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.maxLength(40)]),
    password: new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(40)]),
    confirmPassword: new FormControl("",[Validators.required,Validators.maxLength(40),]),
    formation: new FormControl("",[Validators.required]),
    annee: new FormControl("",[Validators.required]),

  },{validators:this.checkPasswords});
  //TODO faire la validation identique

  constructor(public user:UserService,public route:Router) { }
  changeform(){
    if (this.form.get("formation")!.value == "PEIP"){
      this.annees=[1,2]
    }
    else if (this.form.get("formation")!.value == ""){
      this.annees=[1,2,3,4,5]
    }else{
      this.annees=[3,4,5]
    }

  }

  ngOnInit(): void {
  }
  validate(){
    this.user.setPassword(this.route.url.split("/")[-1],this.form.value).subscribe({
      error:(e)=>{
        this.erreur = true

      },
      complete:()=>{

      }
    })
  }

}
