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

  ngOnInit(): void {
    
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
