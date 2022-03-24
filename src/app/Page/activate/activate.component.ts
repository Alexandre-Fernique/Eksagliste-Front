import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Services/Auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  erreur = false

  constructor(public auth:AuthService,public router:Router) {


  }

  ngOnInit(): void {
    this.auth.activate(this.router.url.split("/")[2]).subscribe({
      next:(value) => {
        localStorage.setItem('access_token',value.acess_token)

        this.router.navigate(['/']);

      },error:(er)=>{
        this.erreur=true;
      }
    })
  }

}
