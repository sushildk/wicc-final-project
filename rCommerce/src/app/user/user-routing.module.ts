import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guard/user.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:'userDasboard',
        loadChildren:()=>import('./user-dahboard/user-dahboard.module').then(m=>m.UserDahboardModule)
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
