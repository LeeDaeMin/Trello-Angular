import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog'
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock
} from '@fortawesome/free-solid-svg-icons'
import { toDo } from 'src/app/models/todo.model';

interface InputData {
  todo: toDo
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent implements OnInit{

    faClose = faClose;
    faCheckToSlot = faCheckToSlot;
    faBars = faBars;
    faUser = faUser;
    faTag = faTag;
    faCheckSquare = faCheckSquare;
    faClock = faClock;

    todo:  toDo;

    constructor(
      private dialogRef: DialogRef<OutputData>,
      @Inject(DIALOG_DATA) data: InputData
    ) {
      this.todo = data.todo;
    }

    ngOnInit(): void {
    }

    close(){

      this.dialogRef.close({
        rta: true,
      });
    }

    closeWithRta(rta: boolean){
      this.dialogRef.close({
        rta,
      });
    }

}
