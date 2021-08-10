import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

const MENU_ANIMATION = trigger('menu', [
  state('closed', style({
    width: '60px',
  })),
  state('open', style({
    width: '300px',
  })),
  transition('open => closed', [
    animate('1s')
  ]),
  transition('closed => open', [
    animate('.4s')
  ]),
])
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [MENU_ANIMATION]
})
export class AppComponent {

  public isOpen = false;

  toggle(){
    this.isOpen = !this.isOpen;
  }
}
