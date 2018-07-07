import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css']
})
export class TaskcreateComponent implements OnInit {

  @Output()
  created = new EventEmitter();

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  newTask(input) {
    this.tasksService.create(input.value).subscribe((res) => {
      this.created.emit(null);
      input.value = '';
    }, (error) => {
      alert('Se ha producido un error al intentar crear la tarea');
      console.log(error);
    })
  }

}
