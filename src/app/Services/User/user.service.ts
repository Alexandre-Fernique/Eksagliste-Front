import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) {

  }
  setPassword(uuid:string,data:object){
    return this.http.post(environment.api+"/users/updatePassword/"+uuid,data,this.httpOptions);
  }
  create(data:any){
    return this.http.post(environment.api+"/users/create",data,this.httpOptions);
  }

}
