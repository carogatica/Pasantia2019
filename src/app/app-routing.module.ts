import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { ForoExperienciaComponent } from './Componentes/foro-experiencia/foro-experiencia.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';


export const routes: Routes = [
  {path:"Login", component:LoginComponent},
  {path:"experiencias", component:ForoExperienciaComponent},
  {path:"formulario", component: FormularioComponent},
  {path: "Noticias", component: NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
