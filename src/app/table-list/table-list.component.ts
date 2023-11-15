import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contributor } from 'app/models/contributor';
import { Task } from 'app/models/task';
import { ContributorsService } from 'app/services/contributors/contributors.service';
import { TasksService } from 'app/services/tasks/tasks.service';
import { TableListDialogComponent } from 'app/table-list-dialog/table-list-dialog.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  tasks: Task[] = [];
  contributors: Contributor[] = [];

  constructor(private taskService: TasksService,
              private contributorService: ContributorsService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.startSubscription();
  }

  startSubscription() {
    this.taskService.getTasks().subscribe( res => {
      this.tasks = res;
    });

    this.contributorService.getContributors().subscribe( res => {
      this.contributors = res;
    });
  }

  deleteTask(e: Task){
    const index = this.tasks.findIndex( (obj: Task) => obj.id == e.id);
    this.tasks.splice(index, 1);
  }

  openDialog(e: Task){
      const dialog = this.dialog.open(TableListDialogComponent, 
        {width: "600px",
         data: {title: e.title, description: e.description, assignee: e.assignee}
        });

        dialog.afterClosed().subscribe(res => {
          if(res){
            const taskIndex = this.tasks.findIndex((obj : Task) => obj.id == e.id);
            this.tasks[taskIndex].title = res.title;
            this.tasks[taskIndex].description = res.description;
            this.tasks[taskIndex].assignee = res.assignee;
          }
        })
  }

  
}
