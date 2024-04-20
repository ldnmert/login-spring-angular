import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { ProComponent } from './components/pro/pro.component';

import { NormalComponent } from './components/normal/normal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,

    ProComponent,
 
    NormalComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
