import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {UserService} from "../../Services/User/user.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent implements OnInit {
  hide = true;
  hide2 = true
  erreur=false;
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value
    return pass === confirmPass ? null : { notSame: true }
  }
  form: FormGroup = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.maxLength(40)]),
      password: new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(40)]),
      confirmPassword: new FormControl("",[Validators.required,Validators.maxLength(40),]),

  },{validators:this.checkPasswords});
  //TODO faire la validation identique

  constructor(public user:UserService,public route:Router) { }

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
