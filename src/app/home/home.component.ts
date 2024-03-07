import { Component, OnInit } from '@angular/core';
//import {logo} from '../src/assets/images/logo.png';
//import logo from  '../../assets/images/logo.jpg';
//import homeBackground from '../../assets/images/dresses.jpg'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../user/signup/signup.component';
import { LoginComponent } from '../user/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
 

  constructor(
    private router: Router,
    public dialog: MatDialog,
    ) { }


    isSignupOpen: boolean = false;
    isLoginOpen: boolean = false;

  logoUrl: string = '../../assets/images/logo.jpg'; 
  //logoUrl: string = '../../assets/images/logo.jpg';

  user: any;
  userName: any;
  profilePicUrl: any;

  ngOnInit(): void {

    
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if(this.user){

    
        console.log("USER ACCOUNT DATA FROM DB ::: ");
        console.log(this.user);
        
        this.userName = this.user.name;
       

        this.profilePicUrl = this.getProfilePicUrl(this.user.profile_pic.data);

        
    }
    
  }
 

  getProfilePicUrl(data: number[]): string {
    if (data && data.length > 0) {
      const uint8Array = new Uint8Array(data);
      const binaryString = uint8Array.reduce((acc, value) => acc + String.fromCharCode(value), '');
      return 'data:image/png;base64,' + btoa(binaryString);
    } else {
      return '';
    }
  }

  openSignupDialog(): void {
    this.isSignupOpen = true;
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Signup dialog was closed');
      this.isSignupOpen = false;
    });
  };

  openLoginDialog(): void {
    this.isLoginOpen = true;
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Login dialog was closed');
      this.isLoginOpen = false;
    });
  };

  openAccountPage(){
    this.router.navigate(['user/account']);
  }

}
