import { Component, OnInit } from '@angular/core';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear} from '@fortawesome/free-solid-svg-icons'
import { faTrello } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit{

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'item 1',
      items: [
        {
          label: 'Sub item 1',
        },
        {
          label: 'Sub item 2',
        }
      ]
    },
    {
      label: 'item 2',
      items: [
        {
          label: 'Sub item 2.1',
        }
      ]
    },
    {
      label: 'item 3',
      items: [
        {
          label: 'Sub item 3.1',
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
