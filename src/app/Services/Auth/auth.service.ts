import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";



//TODO Configurer le service d'authentification

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  accessToken: String = "";
  expiresAt: Number = 0;

  constructor(public router: Router,private http: HttpClient) {}
  public activate(uuid:string){
    return this.http.put<{acess_token:string}>(environment.api+"/users/activate/"+uuid, this.httpOptions)
  }

  public login(email:string,password:string) {
    let data={
      email:email,
      password:password
    }
    return this.http.post<{acess_token:string}>(environment.api+"/users/login", data, this.httpOptions)
  }
  public handleAuthentication(): void {
    window.location.hash = '';
  }
  public getToken() {
    return localStorage.getItem('access_token');
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken != null;
  }
}
