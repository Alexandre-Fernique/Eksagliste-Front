import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../Services/Auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  erreur=false;

  form: FormGroup = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.maxLength(50)]),
    password: new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(40)]),
  });

  constructor(private auth: AuthService,public router: Router) { }

  ngOnInit(): void {
  }
  validate(){

    this.auth.login(this.form.get("email")?.value+"@etu.umontpellier.fr",this.form.get("password")?.value).subscribe({
      next:(value) => {
        localStorage.setItem('access_token',value.acess_token)
        this.router.navigate(['/']);

      },error:(er)=>{
        this.erreur=true;
      }
    })
  }

}
