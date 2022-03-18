import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Services/Auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService,public router: Router) {
  }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout()
  }



}
