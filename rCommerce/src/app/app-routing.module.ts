import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNoFoundComponent } from './shared/page-no-found/page-no-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/main',
    pathMatch:'full'
  },
  {
    path:'auth',
    loadChildren:()=>import("./auth/auth.module").then(m=>m.AuthModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'main',
    loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)
  },
  {
    path:'user',
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'adminauth',
    loadChildren:()=>import('./admin-auth/admin-auth.module').then(m=>m.AdminAuthModule)
  }
  ,
  {
    path:'**',
    component:PageNoFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
