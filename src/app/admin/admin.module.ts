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

import { AddComponent } from './users/add/add.component';
import { EditComponent } from './users/edit/edit.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { ShowRoleComponent } from './Roles/show/show.component';
import { AddRoleComponent } from './Roles/add/add.component';
import { AddPermessionComponent } from './Permessions/add-permession/add-permession.component';
import { RoleDetailsComponent } from './Roles/role-details/role-details.component';
import { SerRolePermessionComponent } from './Roles/ser-role-permession/ser-role-permession.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { ShowCategoryComponent } from './Category/show-category/show-category.component';
import { DetailsCategoryComponent } from './Category/details-category/details-category.component';
import { UpdateCategoryComponent } from './Category/update-category/update-category.component';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    ShowUsersComponent,
    IndexComponent,
    AddRoleComponent,
    AddComponent,
    EditComponent,
    ShowRoleComponent,
    AddPermessionComponent,
    RoleDetailsComponent,
    SerRolePermessionComponent,
    AddCategoryComponent,
    ShowCategoryComponent,
    DetailsCategoryComponent,
    UpdateCategoryComponent,
    
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
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatRadioModule,
    // BrowserModule,
    // AppRoutingModule,
  ]
})
export class AdminModule { }
