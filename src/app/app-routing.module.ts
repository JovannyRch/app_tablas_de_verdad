import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'temas', loadChildren: './pages/temas/temas.module#TemasPageModule' },
  { path: 'contenido/:indice/:tema', loadChildren: './pages/contenido/contenido.module#ContenidoPageModule' },
  { path: 'repositorio', loadChildren: './pages/repositorio/repositorio.module#RepositorioPageModule' },
  { path: 'resultado/:expresion/:fecha/:desc', loadChildren: './pages/resultado/resultado.module#ResultadoPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
