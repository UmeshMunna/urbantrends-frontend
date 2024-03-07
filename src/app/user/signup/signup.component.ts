import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  selectedFile: any;

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.signupForm = this.fb.group({
      name: [''],
      mobile: [''],
      email: [''],
      address: [''],
      profilePicture: null,
      userType: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('name', this.signupForm.value.name);
      formData.append('mobile', this.signupForm.value.mobile);
      formData.append('email', this.signupForm.value.email);
      formData.append('address', this.signupForm.value.address);
      formData.append('userType', this.signupForm.value.userType);
      formData.append('password', this.signupForm.value.password);
      formData.append('profilePicture', this.selectedFile);

      console.log("PROFILE PICTURE :::");
      console.log(this.selectedFile);

      this.userService.signup(formData).subscribe({
        next: (response) => {
          alert('Signup Success...');
          console.log('Signup successful', response);
        },
        error: (error) => {
          console.error('Signup failed', error);
        }
      });
    }
  }
}
