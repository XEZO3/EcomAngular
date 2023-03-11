import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductsComponent } from './products/products.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductInfoComponent } from './product-info/product-info.component';
import { BasketComponent } from './basket/basket.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { OrdersComponent } from './orders/orders.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { WishComponent } from './wish/wish.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ProductsComponent,
    ProductInfoComponent,
    BasketComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    WishComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule
  ]
})
export class PublicModule { }
