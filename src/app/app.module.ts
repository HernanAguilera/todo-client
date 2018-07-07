import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TasksService } from './services/tasks.service';

import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskcreateComponent } from './taskcreate/taskcreate.component';
import { TaskelementComponent } from './taskelement/taskelement.component';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    TaskcreateComponent,
    TaskelementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
