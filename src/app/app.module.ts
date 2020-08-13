import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {MaterialModule} from './material.module';
import {FirebaseModule} from './firebase.module';
import {ComponentsModule} from './components.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from './shared/services/authentication.service';
import {RegisterComponent} from './components/register/register.component';
import {LogoutComponent} from './components/logout/logout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './components/navbar/navbar.component';
import {UserService} from './shared/services/user/user.service';
import {BasketService} from './shared/services/basket/basket.service';
import {LocalStorageService} from './shared/services/local-storage.service';

import {EventsService} from './shared/services/events.service';
import {EmailService} from './shared/services/email.service';
import {WindowRef} from './shared/directives/WindowRef';
import {MaintenanceService} from './shared/services/maintenance.service';
import {HttpClientModule} from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from '../environments/environment';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CommonModule,
        FirebaseModule,
        MaterialModule,
        ComponentsModule,
        AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase, 'pethouse'), // imports firebase/app needed for everything
      AngularFirestoreModule, // imports firebase/firestore, only needed for database features
      AngularFireAuthModule, // imports firebase/auth, only needed for auth features
      AngularFireStorageModule, BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent
    ],
    providers: [
        UserService,
        AuthenticationService,
        LocalStorageService,
        BasketService,
        EventsService,
        EmailService,
        MaintenanceService,
        WindowRef,
    ],
    bootstrap: [
        AppComponent,
    ],
    entryComponents: [
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
    ]
})
export class AppModule {
}
