import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowUsersComponent } from './users/show/show-users.component';
import { IndexComponent } from './index.component';
import { AddComponent } from './users/add/add.component';
import { EditComponent } from './users/edit/edit.component';



const routes: Routes = [
  {
    path:'',component:IndexComponent,
    children:[
      {
        path:'users/show',component:ShowUsersComponent
      },
      {
        path:'users/add',component:AddComponent
      },
      {
        path:'users/edit/:id',component:EditComponent
      }
    ]
  },
  // {
  //   path:'show',component:ShowUsersComponent,
  // },
  // {
  //   path:'register',component:RegisterComponent,
  //   canActivate:[AuthenticationGuard],
  // },
 
  // {
  //   path:'all',component:GetUsersComponent,
  //   canActivate:[AuthGuardGuard],
  //   data:[{roles:['Admin','User']}]
  // },
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
