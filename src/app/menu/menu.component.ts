import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: 'menu.component.html',
  imports : [NgClass],
  styleUrls: ['menu.component.css']
})
export class MenuComponent {

  @Input() clickMenu : boolean | undefined; 
  @Output() viewMenu = new EventEmitter<boolean>();

  onListMenu(){
    this.viewMenu.emit(this.clickMenu);
  }

}
