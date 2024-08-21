import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductPageComponent } from './Component/product-page/product-page.component';
import { ProfilePageComponent } from './Component/profile-page/profile-page.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { CartComponent } from './Component/cart/cart.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [  { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cart', component: CartComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'products', component: ProductPageComponent, canActivate: [] },
    { path: 'profile', component: ProfilePageComponent, canActivate: [] },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {




    
  }
