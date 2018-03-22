import { Component, OnInit } from '@angular/core';

import { Task } from '../../models/Task';

import { DataService } from '../../services/data.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {
  //Declare properties
  task: Task = {
    title: '',
    isDone: false
  }

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value:Task, valid:boolean}){
   
    //Check if client is valid
    if(!valid){
      //Show error
      // this.flashMessage.show('Please fill out the form correctly', {
      //   cssClass: 'alert-danger', timeout: 4000
      // });
      console.log('Please fill out form correctly');
    } else{
      //Add new client
      this.dataService.newTask(value).subscribe(
        res => {
          console.log(res);
        },
        err =>{
          console.log(err);
        }
      );
      //Show message
     
      //redirect to dashboard
      this.router.navigate(['/'])
    }
  }

}
