import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowUsersComponent } from './users/show/show-users.component';
import { AdminRoutingModule } from './admin-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { IndexComponent } from './index.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddComponent } from './users/add/add.component';
import { EditComponent } from './users/edit/edit.component';
@NgModule({
  declarations: [
    ShowUsersComponent,
    IndexComponent,
    SidenavComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    // BrowserModule,
    // AppRoutingModule,
  ]
})
export class AdminModule { }
