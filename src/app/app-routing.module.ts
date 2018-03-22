import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { TasksComponent } from './components/tasks/tasks.component';
import { TasksAddComponent } from './components/tasks-add/tasks-add.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { TaskEditComponent} from './components/task-edit/task-edit.component';

const routes = [
  {path: '', component:TasksComponent},
  {path: 'tasks/add', component:TasksAddComponent},
  {path: 'tasks/:id', component:TaskEditComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
