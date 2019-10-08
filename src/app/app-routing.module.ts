import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { ForoExperienciaComponent } from './Componentes/foro-experiencia/foro-experiencia.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { NoticiasComponent } from './Componentes/noticias/noticias.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'experiencias', component: ForoExperienciaComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'Noticias', component: NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomoponents = [FormularioComponent, ForoExperienciaComponent, LoginComponent];
