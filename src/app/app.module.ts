import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { BrowseComponent } from './browse/browse.component';


import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { AuthGuardService } from './services/auth-guard.service';


const appRoutes: Routes = [
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'users', component: UsersComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent }
  
 ]
 
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    BrowseComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AuthService, UsersService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
