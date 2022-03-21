import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) {

  }
  vote(id:number){
    let data={
      liste:id
    }

    return this.http.post(environment.api+"/liste/vote",data,this.httpOptions)
  }
  get(){
    return this.http.get<Array<{
      id:number,
      title:string,
      image:string,
      _count:{
        vote:number
      }
    }>>(environment.api+"/liste/count",this.httpOptions)
  }
  voteUser(){
    return  this.http.get<any>(environment.api+"/liste/voteUser",this.httpOptions)
  }

}
