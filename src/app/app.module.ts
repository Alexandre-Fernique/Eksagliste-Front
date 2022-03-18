import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { LoginComponent } from './Page/login/login.component';
import {MatInputModule} from "@angular/material/input";
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { ForgotPasswordComponent } from './Page/forgot-password/forgot-password.component';
import { HomeComponent } from './Page/home/home.component';
import {MatIconModule} from "@angular/material/icon";
import { VoteBoxComponent } from './Components/vote-box/vote-box.component';
import { AdviceBoxComponent } from './Components/advice-box/advice-box.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SigninComponent } from './Page/signin/signin.component';
import { RootComponent } from './Components/root/root.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: "", component: AppComponent},
  {path: "", redirectTo:"/", pathMatch: 'full'},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"login",component:LoginComponent},
  {path:"signin",component:SigninComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HomeComponent,
    VoteBoxComponent,
    AdviceBoxComponent,
    NavbarComponent,
    SigninComponent,
    RootComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        RouterModule.forRoot(routes),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        ReactiveFormsModule
    ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
