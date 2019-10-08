import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ForoExperienciaComponent } from './Componentes/foro-experiencia/foro-experiencia.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
RouterModule.forRoot(routes,{useHash:false,onSameUrlNavigation :"reload"})
import { AuthService } from './Services/auth.service';
import { DataService } from './Services/data.service'
import { HttpClientModule  } from '@angular/common/http';;

export const environment = {
  firebase: {
    apiKey: "AIzaSyAG1EtTmDOzvIOwxtOTg3k27fnfmj06_Vs",
    authDomain: "my-internship2019.firebaseapp.com",
    databaseURL: "https://my-internship2019.firebaseio.com",
    projectId: "my-internship2019",
    storageBucket: "my-internship2019.appspot.com",
    messagingSenderId: "640755767967",
    appId: "1:640755767967:web:4ab8749f3fc11302aee0aa"
  }
};


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NoticiasComponent,
    LoginComponent,
    ForoExperienciaComponent,
    FormularioComponent,

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    HttpClientModule
  ],
  providers: [ AuthService, DataService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
