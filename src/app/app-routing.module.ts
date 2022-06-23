import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlatillosPrincipalesComponent } from './pages/platillos-principales/platillos-principales.component';
import { PlatillosVegetarianosComponent } from './pages/platillos-vegetarianos/platillos-vegetarianos.component';
import { PostresCalientesComponent } from './pages/postres-calientes/postres-calientes.component';
import { PostresFriosComponent } from './pages/postres-frios/postres-frios.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'platillos_principales',
    component: PlatillosPrincipalesComponent
  },
  {
    path:'platillos_vegetarianos',
    component: PlatillosVegetarianosComponent
  },
  {
    path:'postres_calientes',
    component: PostresCalientesComponent
  },
  {
    path:'postres_frios',
    component: PostresFriosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
