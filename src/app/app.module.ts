import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { routing } from './core/app.routing';
import { CustomMaterialModule } from './core/material.module';//material module is imported from core folder
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';


import { LoginService } from './Services/login.service';
import { UserService } from './Services/user.service';


import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { MyAccountComponent } from './components/my-account/my-account.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MyAccountComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    routing,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
