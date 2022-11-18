import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BasicoComponent } from './ejemplos/basico/basico.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CanDeactiveGuard } from './can-deactive-guard.service';
import { UserResolve } from './user-resolve.service';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path:'login',component: LoginComponent
  },
  {
    path:'basico',component: BasicoComponent
  },
  /*PATH PARAMS OBLIGATORIOS*/
  {
    path:'productos',component: ProductoComponent
  },
  {
    path:'detalle/:id',component: ProductDetailComponent, canDeactivate:[CanDeactiveGuard]
  },
  {
    path:'buscar',component: BuscarComponent , canDeactivate:[CanDeactiveGuard]
  },
  {
    path:'profile',component: ProfileComponent , resolve:{
      datosDelProfile: UserResolve
    }
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
