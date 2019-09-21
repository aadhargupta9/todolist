import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './to-do/todo-header/todo-header.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TodoInputComponent } from './to-do/todo-input/todo-input.component';
import { TodoListComponent } from './to-do/todo-list/todo-list.component';
import { TodoFooterComponent } from './to-do/todo-footer/todo-footer.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    ToDoComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoFooterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
