import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../Services/Auth/auth.service";


@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  constructor(public authService :AuthService,public router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated() === true) {
      window.alert("Access not allowed!");
      this.router.navigate(['/'])
    }
    return true;
  }

}
