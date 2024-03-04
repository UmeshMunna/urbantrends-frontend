import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendsComponent } from './trends/trends/trends.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { AccountComponent } from './user/account/account.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'user',
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'account', component: AccountComponent },

    ]
  },
  { path: 'trends', component: TrendsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
