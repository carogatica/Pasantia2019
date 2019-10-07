import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { Authentication } from '../app/servicios/authentication.service'

import { LoginComponent } from './Componentes/login/login.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ForoExperienciaComponent } from './Componentes/foro-experiencia/foro-experiencia.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    ForoExperienciaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    TextFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAG1EtTmDOzvIOwxtOTg3k27fnfmj06_Vs",
      authDomain: "my-internship2019.firebaseapp.com",
      databaseURL: "https://my-internship2019.firebaseio.com",
      projectId: "my-internship2019",
      storageBucket: "my-internship2019.appspot.com",
      messagingSenderId: "640755767967",
      appId: "1:640755767967:web:4ab8749f3fc11302aee0aa"
    }),                                       
    AngularFireAuthModule
  ],
  providers: [Authentication],
  bootstrap: [AppComponent]
})
export class AppModule { }
