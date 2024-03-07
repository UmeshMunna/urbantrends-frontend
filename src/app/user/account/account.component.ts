import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {

  constructor(
    private router: Router,
    ) { }


  user: any;
  userName : any;
  mobile : any;
  email : any;
  address : any;
  userType : any;
 
  profilePicUrl: any;

  ngOnInit(): void {
    
    //this.user = localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log("USER ACCOUNT DATA FROM DB ::: ");
    console.log(this.user);
    
    this.userName = this.user.name;
    this.email = this.user.email;
    this.mobile = this.user.mobile;

    console.log(this.userName);

    this.profilePicUrl = this.getProfilePicUrl(this.user.profile_pic.data);

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
  
  setLogout(){
    this.router.navigate(['/']);
  }


}
