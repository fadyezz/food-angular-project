import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './Component/about/about.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { ProfilePageComponent } from './Component/profile-page/profile-page.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './Component/product-page/product-page.component';
import { CartComponent } from './Component/cart/cart.component';
import { SharedService } from './shared.service';
import { AuthService } from './auth.service';
import { User } from 'firebase/auth'; // Adjust based on your Firebase import
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    ProfilePageComponent,
    RegistrationComponent,
    RouterModule,
    FormsModule,
    ProductPageComponent,
    CartComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'store-website';
  
  isLoggedIn=false;
  authService=inject(AuthService);
  
  constructor(public sharedService: SharedService,private router: Router) {}  // Inject SharedService

  ngOnInit(): void {

    this.authService.user$.subscribe((userInfo: User | null) => {
      
      if (userInfo) {
        this.authService.currentUserSig.set({
          email: userInfo?.email!,
          username: userInfo?.displayName!,
        });
        this.isLoggedIn=true;
      } else {
        this.authService.currentUserSig.set(null);
        this.isLoggedIn=false;
      }
    });
    console.log(this.authService.currentUserSig());
  
  }

  logout():void{
    this.authService.logout();
    this.router.navigate(['/login']);

  }

}
