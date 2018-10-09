import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


export const firebaseConfig = {
    apiKey: "AIzaSyBPKmCKPQPjqtyA_dAGecl-Kt0QI0anHUY",
    authDomain: "fir-chatapp-77695.firebaseapp.com",
    databaseURL: "https://fir-chatapp-77695.firebaseio.com",
    projectId: "fir-chatapp-77695",
    storageBucket: "fir-chatapp-77695.appspot.com",
    messagingSenderId: "565642158931"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
