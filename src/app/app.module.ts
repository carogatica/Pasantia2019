import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingcomoponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ForoExperienciaComponent } from './Componentes/foro-experiencia/foro-experiencia.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoticiasComponent } from './Componentes/noticias/noticias.component';
// Firebase login
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
// Services
import { AuthService } from './Services/auth.service';
import { DataService } from './Services/data.service';

var firebaseConfig = {
  apiKey: "AIzaSyAG1EtTmDOzvIOwxtOTg3k27fnfmj06_Vs",
  authDomain: "my-internship2019.firebaseapp.com",
  databaseURL: "https://my-internship2019.firebaseio.com",
  projectId: "my-internship2019",
  storageBucket: "my-internship2019.appspot.com",
  messagingSenderId: "640755767967",
  appId: "1:640755767967:web:4ab8749f3fc11302aee0aa"
};

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    routingcomoponents,
    NoticiasComponent,
    FormularioComponent,
    ForoExperienciaComponent
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
