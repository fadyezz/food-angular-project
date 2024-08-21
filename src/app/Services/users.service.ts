
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //1)URL  ===> https://jsonplaceholder.typicode.com/users
  //DB_URL = "http://localhost:3000/users";
  DB_URL = "https://jsonplaceholder.typicode.com/users";

  //2)Use HTTP ===> Methods[GET-POST-DELETE-PUT-PATCH]
  constructor(public myHttp: HttpClient) {}
  //3)Handle All Requests
  GetAllUsers(){
    return this.myHttp.get(this.DB_URL);
  }
  GetUserById(id:number){
    return this.myHttp.get(this.DB_URL+"/"+id)//users/5
  }
  AddNewUser(body:any){
    return this.myHttp.post(this.DB_URL, body);
  }
}
