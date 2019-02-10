import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserService} from './services/user.service';
import {StorageService} from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuardService,
    UserService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
