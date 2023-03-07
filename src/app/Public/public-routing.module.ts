import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
  path:'',component:IndexComponent,children:[
    {
      path:'',component:HomeComponent
    }
  ]
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
