import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModualModule } from './modual/modual.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ResetPasswordComponent,
    HomeComponent,
    DashboardComponent,
    InteriveComponent,
    HrsComponent,
    DesignationComponent,
    TechnologiesComponent,
    LoginComponent,
    RecreateComponent,
    AddInterviewerComponent,
    EditProfileComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModualModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
