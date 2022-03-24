import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirm-signin',
  templateUrl: './confirm-signin.component.html',
  styleUrls: ['./confirm-signin.component.css']
})
export class ConfirmSigninComponent implements OnInit {

  constructor(public router:Router) { }
  getUrl(){
    return this.router.url.split("/")[2]
  }

  ngOnInit(): void {
  }

}
