import {Injectable} from '@angular/core';
import {Router} from '@angular/router';


(window as any).global = window;

//TODO Configurer le service d'authentification

@Injectable()
export class AuthService {

  accessToken: String = "";
  expiresAt: Number = 0;

  constructor(public router: Router) {}

  public login(): void {

  }
  public handleAuthentication(): void {

    window.location.hash = '';


  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    this.accessToken = "";
    this.expiresAt = 0;
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    return new Date().getTime() < this.expiresAt;
  }
}
