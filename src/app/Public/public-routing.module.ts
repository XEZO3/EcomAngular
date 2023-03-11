import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { BasketComponent } from './basket/basket.component';
import { LoginComponent } from './Auth/login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { WishComponent } from './wish/wish.component';
const routes: Routes = [
  {
  path:'',component:IndexComponent,children:[
    {
      path:'',component:HomeComponent
    },
    {
      path:'Products',component:ProductsComponent
    },
    {
      path:'Products/:id',component:ProductInfoComponent
    },
    {
      path:'Cart',component:BasketComponent
    },
    {
      path:'Login',component:LoginComponent
    },
    {
      path:'Orders',component:OrdersComponent
    },
    {
      path:'Wish',component:WishComponent
    },
  ]
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
