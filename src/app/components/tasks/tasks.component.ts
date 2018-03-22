import { Component, OnInit, ViewChild } from '@angular/core';

import { Task } from '../../models/Task';

import { DataService } from '../../services/data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //Declare Properties
  tasks: Task[];
  task: Task;

    //Set ViewChild clientForm
    @ViewChild('taskForm') form: any

  constructor(
    private router: Router,
    private dataService: DataService    
  ) { }

  ngOnInit() {
       
    //Get all tasks from API via dataService
    this.dataService.getTasks().subscribe(tasks => {
      this.tasks = tasks;   
    });
  }

  onDeleteClick(id){
    if(confirm('Are you sure?')){
      console.log(id);
      this.dataService.deleteTask(id).subscribe(data => {
        console.log(data);
      });
      this.router.navigate(['/']);    
    }
    // this.router.navigate(['/']); 
  }

}
