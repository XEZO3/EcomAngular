import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatButtonModule,
  ]
})
export class PublicModule { }
