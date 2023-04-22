import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import{FormsModule} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
@NgModule({
  declarations: [
    AppComponent,
  
    TodoComponent,
   
  ],
  imports: [
    BrowserModule,HttpClientModule,NgxPaginationModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
