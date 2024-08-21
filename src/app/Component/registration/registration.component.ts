import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';
import { Auth,createUserWithEmailAndPassword,updateProfile, user } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { UserInterface } from '../../user.interface';
import {AuthService} from '../../auth.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,

  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  firebase=inject(Auth);
  authService=inject(AuthService)
  errorMessage: string|null=null;
  user$= user(this.firebase);
  currentUserSig=signal<UserInterface |null|undefined>(undefined)
  // username: string = '';
  // password: string = '';
  // email: string = '';
  // gender: string = '';
  // file: File | null = null;

  constructor(public _shared:SharedService,    public router: Router   ){

  }

  ngOnInit(): void {
    
  }

  onSubmit() {


  this.authService.register(
    this._shared.UserInfoData.email,
    this._shared.UserInfoData.username,
    this._shared.UserInfoData.password
  ).subscribe({
    next:()=>{
      this.router.navigate(['login']);  
    },
    error:(err)=>{
      this.errorMessage=err.code;
    }
})

  // alert(`Username: ${this._shared.UserInfoData.username}\nEmail: ${this._shared.UserInfoData.email}\nGender: ${this._shared.UserInfoData.gender}`);
  // this.router.navigate(['login']);  
  }

  // onFileChange(event: any) {
  //   this.file = event.target.files[0];
  // }

  // onUserLogin(username: string, email: string) {
  //   this._shared.UserInfoData.username = username
  //   this._shared.UserInfoData.email = email;
  // }

  add(){
    
    this._shared.Users.push(this._shared.UserInfoData);
    // this._shared.UserInfo = {
    //   username : '',
    //   password:'',
    //   email : '',
    //   gender :'',
    // }
  
  }
}
