import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModuleModule } from './modules/home-module/home-module.module';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8rNfmKLPz8RpdTd0ox0lmJTEyoUstrjc",
  authDomain: "angular-adroid.firebaseapp.com",
  projectId: "angular-adroid",
  storageBucket: "angular-adroid.appspot.com",
  messagingSenderId: "916765976742",
  appId: "1:916765976742:web:d20a063db4509193976c67",
  measurementId: "G-ME650BYSZQ"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModuleModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
