import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { toDo, Column } from '../../models/todo.model'

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
          title: 'Task 3'
        },
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: 1,
          title: 'Task 1'
        },
        {
          id: 2,
          title: 'Task 2'
        },
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: 4,
          title: 'Task 4'
        },
      ]
    }
  ];

  todo: toDo[] = [];
  doing: toDo[] = [];
  done: toDo[] = [];

  constructor() { }

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


}
