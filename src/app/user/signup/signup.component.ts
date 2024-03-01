import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required], 
      email: ['', Validators.required], 
      address: ['', Validators.required], 
      profilePicture: ['', Validators.required],  
      userType: ['', [Validators.required,]],
      password: ['', [Validators.required,]], 

      
    });
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    if (this.signupForm.valid) {
      this.userService.signup(this.signupForm.value).subscribe({
        next: (response) => {
          console.log('Signup successful', response);
          
        },
        error: (error) => {
          console.error('Signup failed', error);
          
        }
      });
    }
  }
}
