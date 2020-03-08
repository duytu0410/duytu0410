import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Login2Component } from './components/login2/login2.component';
import { HomeComponent } from './components/home/home.component';
import {IconsModule} from './module/icons/icons.module';
import { NotificationComponent } from './components/notification/notification.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login2Component,
    HomeComponent,
    NotificationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
