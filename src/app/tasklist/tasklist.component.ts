import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { TaskInterface } from '../interfaces/task.interface'

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  tasks: TaskInterface[];

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.taskService.getList().subscribe((tasks: TaskInterface[]) => {
      this.tasks = tasks;
    })
  }

}
