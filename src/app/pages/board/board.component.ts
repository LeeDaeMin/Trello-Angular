import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { toDo } from '../../models/todo.model'

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

  todo: toDo[] = [
    {
      id: 1,
      title: 'Task 1'
    },
    {
      id: 2,
      title: 'Task 2'
    },

  ];

  doing: toDo[] = [
    {
      id: 3,
      title: 'Task 3'
    },
  ];
  done: toDo[] = [
    {
      id: 4,
      title: 'Task 4'
    },
  ];

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


}
