import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';
import * as jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,

  ) {
    
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required,]], 

      
    });
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("LOGIN FORM ###");
      console.log(this.loginForm.value);
      this.userService.login(this.loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          const helper = new JwtHelperService();

          const decodedToken = helper.decodeToken(response.token);

          console.log("Token:::");
          console.log(decodedToken);
          const expirationDate = helper.getTokenExpirationDate(response.token);
          console.log("Expiry Date:::");
          console.log(expirationDate);
          const isExpired = helper.isTokenExpired(response.token);
          console.log("Is Expired:::");
          console.log(isExpired);
          console.log('Login successful', response);

          this.closeDialog();
          this.router.navigate(['user/account']);
          
        },
        error: (error) => {
          alert('Invalid user or password')
          console.error('Login failed', error);
          
        }
      });
    }
  }
  

}
