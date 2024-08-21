
import { Component, inject, OnInit } from '@angular/core';
import {
    user,
    Auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile, 
    signOut
} from '@angular/fire/auth';
import { Injectable,signal } from '@angular/core';
import { from, Observable } from 'rxjs';
import {UserInterface} from './user.interface';


@Injectable({
    providedIn: 'root'
  })
  

export class AuthService{    

    firebase=inject(Auth);

    user$ = user(this.firebase);
    currentUserSig = signal<UserInterface | null | undefined>(undefined)

  logout():Observable<void>{
    const promise= signOut(this.firebase);
    return from(promise);
  }

  // login(
  //   email:string,
  //   password:string
  //   ):Observable<void>{
  //     const promise=signInWithEmailAndPassword(
  //           this.firebase,email,password
  //     )
  //     .then((result) => {
  //         alert(`User Login Success: ${email}`);
  //     })
  //     .catch(()=>{ 
  //         alert('Login failed. Please check your username and password.');
  //     })

  //     return from(promise);
    
  // }
  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.firebase, email, password));
  }
    
register(
    email:string,
    username:string,
    password:string
    
    ):Observable<void>{
    
      const promise=createUserWithEmailAndPassword(
        this.firebase,
        email,
        password
      ).then((result) => {
        updateProfile(result.user,{displayName:username})
      }).catch(()=>{
          alert(`please enter full data`);
      })
      return from(promise);
    
    }



}
