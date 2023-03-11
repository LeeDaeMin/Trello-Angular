import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
    {
      id: 3,
      title: 'Task 3'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  drop($event: CdkDragDrop<any[]>) {
    moveItemInArray(this.todo, $event.previousIndex, $event.currentIndex);
  }


}
