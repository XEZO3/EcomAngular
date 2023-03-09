import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestoComponent } from './testo/testo.component';

const routes: Routes = [
  {
    path:'admin',loadChildren:()=>import("./admin/admin.module").then(x=>x.AdminModule)
  },
  {
    path:'public',loadChildren:()=>import("./Public/public.module").then(x=>x.PublicModule)
  },
  {
    path:'',component:TestoComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
