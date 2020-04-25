import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishListComponent } from './fish-list/fish-list.component';
import { FishComponent } from './fish/fish.component';
import { FormComponent } from './form/form.component';
import {ForSubmitService} from './for-submit.service';

const config = {
  apiKey: 'AIzaSyAIta1S6V7qGJtuIMXFlZriMPo9aKUWmEg',
  authDomain: 'acnh-fish-guide.firebaseapp.com',
  databaseURL: 'https://acnh-fish-guide.firebaseio.com',
  projectId: 'acnh-fish-guide',
  storageBucket: 'acnh-fish-guide.appspot.com',
  messagingSenderId: '866984317668',
  appId: '1:866984317668:web:24999bfdfd3f1d560a52f1',
  measurementId: 'G-W90H0D0YQN'
};

@NgModule({
  declarations: [
    AppComponent,
    FishListComponent,
    FishComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AngularFireModule,
    AngularFirestoreModule,
    ForSubmitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
