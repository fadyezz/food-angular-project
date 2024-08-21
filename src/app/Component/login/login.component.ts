import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule],
})
export class LoginComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;
  submitted = false;

  firebase = inject(Auth);
  authService = inject(AuthService);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;

    if (!this.email || !this.password) {
      this.errorMessage = 'Email and Password are required.';
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        this.errorMessage = err.code;
      }
    });
  }
}
