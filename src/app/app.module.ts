import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http'; 

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { TasksAddComponent } from './components/tasks-add/tasks-add.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksAddComponent,
    TasksComponent,
    NavbarComponent,
    NotFoundComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
