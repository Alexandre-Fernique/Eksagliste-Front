import { Component } from '@angular/core';
import {AuthService} from "../../Services/Auth/auth.service";


@Component({
  selector: 'app-advice-box',
  templateUrl: './advice-box.component.html',
  styleUrls: ['./advice-box.component.css']
})
export class AdviceBoxComponent {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

}
