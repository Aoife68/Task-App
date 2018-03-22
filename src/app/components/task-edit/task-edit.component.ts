import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  //Declare Properties
  id: string;
  title: string;
  isDone: boolean;


  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //Get id from Url
    this.id = this.route.snapshot.params['id'];

    this.dataService.getTask(this.id).subscribe(task => {
      this.title = task.title;
      this.isDone = task.isDone;
    });
  }

  onSubmit({value, valid}: {value:Task, valid:boolean}){
    
    //Check if client is valid
    if(!valid){
      console.log('Please fill out form correctly');
    } else{
      value.id = this.id;

      //Add new client
      this.dataService.updateTask(value).subscribe(
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
