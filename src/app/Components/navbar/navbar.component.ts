import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Services/Auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth = false

  constructor(private auth:AuthService) {
    this.isAuth=this.auth.isAuthenticated()
    console.log(this.auth.isAuthenticated())
  }

  ngOnInit(): void {
    this.isAuth=this.auth.isAuthenticated()
    console.log(this.auth.isAuthenticated())
  }
  logout(){
    this.auth.logout()
    this.isAuth = false
  }
  //TODO Faire la mise à jour de la navbar quand on se login


}
