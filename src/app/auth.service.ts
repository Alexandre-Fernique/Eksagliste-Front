import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import * as auth0 from 'auth0-js';

// why do you need defining window as any?
// check this: https://github.com/aws/aws-amplify/issues/678#issuecomment-389106098
(window as any).global = window;

//TODO Configurer le service d'authentification

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: '<APPLICATION_CLIENT_ID>',
    domain: '<YOUR_AUTH0_DOMAIN>',
    responseType: 'token',
    redirectUri: 'http://localhost:4200/',
    scope: 'openid'
  });

  accessToken: String = "";
  expiresAt: Number = 0;

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.accessToken = authResult.accessToken;
        //this.expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.router.navigate(['/dashboard']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
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
