import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup, FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {UserService} from "../../Services/User/user.service";
import {Router} from "@angular/router";
import {ErrorStateMatcher} from "@angular/material/core";
import {MatSnackBar} from "@angular/material/snack-bar";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent!.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

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
  loadingData=false;
  matcher = new MyErrorStateMatcher();

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

  constructor(public user:UserService,public router:Router,private _snackBar: MatSnackBar) { }
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
  openSnackBar(text:string) {
    this._snackBar.open(text, '', {
      horizontalPosition: "left",
      verticalPosition: "top",
      duration:3000
    });
  }

  ngOnInit(): void {
  }
  validate(){
    this.loadingData=true
    let data = this.form.value
    data.email = data.email + "@etu.umontpellier.fr"
    this.user.create(data).subscribe({
      error:(e)=>{
        console.log(e)
        this.loadingData=false
        this.erreur = true

      },
      complete:()=>{
        this.loadingData=false
        this.router.navigate(['/confirmSignin/'+this.form.get("email")!.value]);

      }
    })
  }

}
