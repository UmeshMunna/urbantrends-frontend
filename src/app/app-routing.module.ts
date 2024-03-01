import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './user/profile/profile.component';
import { TrendsComponent } from './trends/trends/trends.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './user/signup/signup.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'trends', component: TrendsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
