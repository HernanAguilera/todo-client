import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { TaskInterface } from '../interfaces/task.interface';

@Component({
  selector: 'app-taskelement',
  templateUrl: './taskelement.component.html',
  styleUrls: ['./taskelement.component.css']
})
export class TaskelementComponent implements OnInit {

  @Input() task: TaskInterface;

  @Output()
  deleted = new EventEmitter();

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  delete () {
    this.tasksService.delete(this.task._id).subscribe((res) => {
      this.deleted.emit(null);
    }, (error) => {
      console.log(error);
    })
  }

}
