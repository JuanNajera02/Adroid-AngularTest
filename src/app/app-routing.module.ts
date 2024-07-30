import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home-module/pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ruta para HomeComponent
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la ruta vacía a 'home'
  { path: '**', redirectTo: '/home' } // Redirige rutas no encontradas a 'home'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
