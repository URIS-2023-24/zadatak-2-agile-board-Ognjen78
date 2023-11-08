import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contributor } from 'app/models/contributor';
import { Task } from 'app/models/task';
import { TaskDialogData } from 'app/models/task-dialog-data';
import { ContributorsService } from 'app/services/contributors/contributors.service';
import { TasksService } from 'app/services/tasks/tasks.service';

@Component({
  selector: 'app-table-list-dialog',
  templateUrl: './table-list-dialog.component.html',
  styleUrls: ['./table-list-dialog.component.css']
})
export class TableListDialogComponent implements OnInit {

  

  constructor(private dialogRef: MatDialogRef<TableListDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: TaskDialogData) { }

  ngOnInit() {
    
  }

  onClick() : void {
    this.dialogRef.close();
  }

 

}
