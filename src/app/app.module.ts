import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { TestoComponent } from './testo/testo.component';
import { TokenIntercepterService } from './shared/Services/token-intercepter.service';


@NgModule({
  declarations: [
    AppComponent,
    TestoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  
  providers: [{
    provide :HTTP_INTERCEPTORS,
    useClass : TokenIntercepterService,
    multi:true
  },
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
