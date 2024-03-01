import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';

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
          alert("Login Success...");
          console.log('Login successful', response);
          
        },
        error: (error) => {
          console.error('Login failed', error);
          
        }
      });
    }
  }

}
