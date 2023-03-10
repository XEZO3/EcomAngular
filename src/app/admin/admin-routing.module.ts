import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowUsersComponent } from './users/show/show-users.component';
import { IndexComponent } from './index.component';
import { AddComponent } from './users/add/add.component';
import { EditComponent } from './users/edit/edit.component';
import { AddRoleComponent } from './Roles/add/add.component';
import { ShowRoleComponent } from './Roles/show/show.component';
import { AddPermessionComponent } from './Permessions/add-permession/add-permession.component';
import { RoleDetailsComponent } from './Roles/role-details/role-details.component';
import { SerRolePermessionComponent } from './Roles/ser-role-permession/ser-role-permession.component';
import { ShowCategoryComponent } from './Category/show-category/show-category.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { DetailsCategoryComponent } from './Category/details-category/details-category.component';
import { BrandShowComponent } from './Brand/brand-show/brand-show.component';
import { BrandAddComponent } from './Brand/brand-add/brand-add.component';
import { BrandDetailsComponent } from './Brand/brand-details/brand-details.component';
import { ProductShowComponent } from './Products/product-show/product-show.component';
import { ProductDetailsComponent } from './Products/product-details/product-details.component';
import { ProductAddComponent } from './Products/product-add/product-add.component';



const routes: Routes = [
  {
    path:'',component:IndexComponent,
    children:[
      //users
      {
        path:'users/show',component:ShowUsersComponent
      },
      
      {
        path:'users/edit/:id',component:EditComponent
      },
      {
        path:'users/add',component:AddComponent
      },
      //roles
      {
        path:'Roles/add',component:AddRoleComponent
      },
      {
        path:'Roles/show',component:ShowRoleComponent
      },
      {
        path:"Roles/details/:id",component:RoleDetailsComponent
      },
      {
        path:"Roles/setpermession/:id",component:SerRolePermessionComponent
      },
      //permession
      {
        path:"Permessions/add",component:AddPermessionComponent
      },
      //Category
      {
        path:"Category/show",component:ShowCategoryComponent
      },
      {
        path:"Category/add",component:AddCategoryComponent
      },
      {
        path:"Category/details/:id",component:DetailsCategoryComponent
      },
      //Brands
      {
        path:"Brand/show",component:BrandShowComponent
      },
      {
        path:"Brand/add",component:BrandAddComponent
      },
      {
        path:"Brand/details/:id",component:BrandDetailsComponent
      },
      //
      {
        path:"Product/show",component:ProductShowComponent
      },
      {
        path:"Product/add",component:ProductAddComponent
      },
      {
        path:"Product/details/:id",component:ProductDetailsComponent
      },

      
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
