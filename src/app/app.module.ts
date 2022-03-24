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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NotAuthGuard} from './shared/Auth/notauth.guard'
import {AuthInterceptor} from "./shared/Auth/auth.interceptor";
import { CreatePasswordComponent } from "./Page/create-password/create-password.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {QuestionBoxComponent} from './Components/question-box/question-box.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { QuestionSliderComponent } from './Components/question-slider/question-slider.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Err404Component } from './Page/err404/err404.component';
import { ActivateComponent } from './Page/activate/activate.component';
import { ConfirmSigninComponent } from './Page/confirm-signin/confirm-signin.component';


const routes: Routes = [
  {path: "", component: AppComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"login",component:LoginComponent,canActivate:[NotAuthGuard]},
  {path:"signin",component:SigninComponent},
  {path:"createPassword/:uuid",component:CreatePasswordComponent},
  {path:"activate/:uuid",component:ActivateComponent},
  {path:"confirmSignin/:email",component:ConfirmSigninComponent},
  {path: "**", component: Err404Component},
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
    RootComponent,
    CreatePasswordComponent,
    QuestionBoxComponent,
    QuestionSliderComponent,
    Err404Component,
    ActivateComponent,
    ConfirmSigninComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatSelectModule,
        MatInputModule,
        RouterModule.forRoot(routes),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatProgressBarModule,
        MatDialogModule
    ],
  exports:[RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [RootComponent]
})
export class AppModule { }
