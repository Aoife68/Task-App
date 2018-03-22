import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/Task';
import 'rxjs/add/operator/map';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class DataService {
  //Declare properties
  tasksAPI = '/api/tasks';

  constructor(public httpClient: HttpClient) { 
    console.log('Data Service Connected....');
  }
   
  //Get Tasks from API
  getTasks(): Observable<Task[]>{
    //this get will return an observable so we need map 
    return this.httpClient.get<Task[]>(this.tasksAPI);
    
  }

   //Add New Task to API
   newTask(task: Task){
    //add task to db
    return this.httpClient.post<Task>(this.tasksAPI, task, httpOptions);
  }

  //Get a Single Task for Editing
  getTask(id: string):Observable<Task>{
    //return single task based on id
    return  this.httpClient.get<Task>(this.tasksAPI+'/'+id);    
  }

  //Update Edit 
  updateTask(task: Task):Observable<Task>{
    //add task to db
    return this.httpClient.put<Task>(this.tasksAPI+'/'+task.id, task, httpOptions);
  }
 

  //Delete Task
  deleteTask(id: string){
    return this.httpClient.delete<Task>(this.tasksAPI+'/'+id, httpOptions);
  }

}
