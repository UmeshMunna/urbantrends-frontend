import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {

  user: any;
  userName : any;
  profilePicUrl: any;


  ngOnInit(): void {
    
    //this.user = localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.user);
    
    this.userName = this.user.name;
    console.log(this.userName);
    const mobile = localStorage.getItem('mobile');
    const email = localStorage.getItem('email');
    const address = localStorage.getItem('address');
    const profilePicture = localStorage.getItem('profile_pic');
    const userType = localStorage.getItem('user_type');

    this.profilePicUrl = this.getProfilePicUrl(this.user.profile_pic.data);

  }

  getProfilePicUrl(data: number[]): string {
    if (data && data.length > 0) {
      const binary = String.fromCharCode.apply(null, data);
      return 'data:image/png;base64,' + btoa(binary);
    } else {
      return '';
    }
  }


}
