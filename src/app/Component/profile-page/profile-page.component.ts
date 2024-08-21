import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { AuthService } from '../../auth.service';
import { User } from 'firebase/auth'; // Adjust based on your Firebase import

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
/*export class ProfilePageComponent implements OnInit {
  username: string | null = '';
  email: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve query parameters
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this.email = params['email'];
    });
  }
  /*user = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    gender: 'Male',
    image: 'https://via.placeholder.com/150',
  };*/
  /*@Input() username: string = '';
  @Input() email: string = '';
  gender: string = '';
  password: string = '';
  file: File | null = null;


  onSubmit() {
    if (this.username && this.email && this.gender) {
      alert(`Profile Updated:\nUsername: ${this.username}\nEmail: ${this.email}\nGender: ${this.gender}`);
      // Handle further processing (e.g., API call to save the data)
    } else {
      alert('Please fill in all fields.');
    }
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }


}*/

export class ProfilePageComponent implements OnInit {
  username: string = '';
  email: string = '';
  gender: string = '';
  authService=inject(AuthService);
  file: File | null = null;
  UserInfoData: any;

  // userInfo: any = {}; // Use appropriate type for user info
  orders: any[] = []; // Use appropriate type for orders
  selectedOrderId: number | null = null; // For canceling orders
  userService: any;
  orderService: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _shar:SharedService
  ) {}

  // ngOnInit(): void {
    // this._shar.UserInfoData;
    // this._shar.Users;
    // this._shar.UserInfoData;
    // this.UserInfoData = this._shar.UserInfoData;




    //this.loadUserInfo();
    // this.loadUserOrders();
  // }

  ngOnInit(): void {

    this.authService.user$.subscribe((userInfo: User | null) => {
      if (userInfo) {
        this.authService.currentUserSig.set({
          email: userInfo.email!,
          username: userInfo.displayName!,
        });
  
        this.username = userInfo.displayName || ''; // Default to an empty string if null
        this.email = userInfo.email || ''; // Default to an empty string if null
        
      } else {
        this.authService.currentUserSig.set(null);
        this.username = ''; // Set to an empty string if userInfo is null
        this.email = ''; // Set to an empty string if userInfo is null
      }
    });
    console.log(this.authService.currentUserSig());
  
  }

  // loadUserInfo() {
  //   this.userService.getUserInfo().subscribe((data: any) => {
  //     this._shared.UserInfo = data; // Assuming the API returns user info
  //   });
  // }

   loadUserOrders() {    
      fetch('https://dummyjson.com/users/6/carts')
      .then(res => res.json())
      .then(data => {
        this.orders = data.carts; // Assuming recipes are in data.recipes  
        console.log(this.orders);
      })
      .catch(error => {
        console.error('Error fetching carts:', error);
      });
    
   }

  editUserInfo() {
    this._shar.UserInfoData.email=this.email;
    this._shar.UserInfoData.username=this.username;
    // this.userService.updateUserInfo(this._shared.UserInfoData).subscribe(() => {
    //   alert('User info updated successfully!');
    // });
    // this._shar.UserInfoData.email=
    // this._shar.UserInfoData.username=

  }

  // cancelOrder(orderId: number) {
  //   this.orderService.cancelOrder(orderId).subscribe(() => {
  //     // this.loadUserOrders(); // Refresh orders after cancellation
  //     alert('Order canceled successfully!');
  //   });
  //}


}