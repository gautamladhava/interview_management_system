import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { InteriveComponent } from './component/interive/interive.component';
import { HrsComponent } from './component/hrs/hrs.component';
import { DesignationComponent } from './component/designation/designation.component';
import { TechnologiesComponent } from './component/technologies/technologies.component';
import { LoginComponent } from './component/login/login.component';
import { RecreateComponent } from './component/recreate/recreate.component';
import { AddInterviewerComponent } from './component/add-interviewer/add-interviewer.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { ScheduleComponent } from './component/schedule/schedule.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login",component:LoginPageComponent,children:[
    {path:"", redirectTo:"login-page", pathMatch:"full"},
    {path:"login-page",component:LoginComponent},
    {path:"reset-password",component:ResetPasswordComponent},
    {path:"recreate",component:RecreateComponent}

  ]},
  {path:"reset-password",component:ResetPasswordComponent},
  {path:"home",component:HomeComponent,children:[
    {path:"", redirectTo:"dashboard", pathMatch:"full"},
    {path:"dashboard",component:DashboardComponent},
    {path:"interviwer",component:AddInterviewerComponent},
    {path:"edit-profile",component:EditProfileComponent},
    {path:"schedule",component:ScheduleComponent},
    {path:"interviewers",component:InteriveComponent},
    {path:"HRs",component:HrsComponent},
    {path:"designations",component:DesignationComponent},
    {path:"technologies",component:TechnologiesComponent}
  ]}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
