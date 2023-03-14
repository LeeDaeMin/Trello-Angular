import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';
import { toDo, Column } from '../../models/todo.model'
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      .cdk-drop-list-dragging {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `
  ]
})
export class BoardComponent implements OnInit {

  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        {
          id: 3,
          title: 'Aprender Coreano'
        },
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: 1,
          title: 'Aprender japones'
        },
        {
          id: 2,
          title: 'Aprender Chino'
        },
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: 4,
          title: 'Aprender Ingles'
        },
      ]
    }
  ];

  todo: toDo[] = [];
  doing: toDo[] = [];
  done: toDo[] = [];

  constructor(
    private dialog: Dialog
  ) {}

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<toDo[]>) {
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }


  addColumn(){
    this.columns.push({
      title: 'New Column',
      todos: []
    });
  }

  openDialog(todo: toDo){
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        todo: todo
      }
    });
    dialogRef.closed.subscribe(output =>{
      console.log(output);
    });
  }

}
