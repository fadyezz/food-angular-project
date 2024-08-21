import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  UserInfoData = {
    id: 0,
    username: '',
    password: '',
    email: '',
    gender: '',
  };

  Users: any[] = [];

  isLoggedIn: boolean = false;  // New property to track login status

  
}
