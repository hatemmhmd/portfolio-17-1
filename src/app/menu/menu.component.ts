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

  isHovering : boolean = false;

  @Input() clickMenu : boolean | undefined; 
  @Output() viewMenu = new EventEmitter<boolean>();
  @Output() scrollsection = new EventEmitter<string>();


    onListMenu(section : string) {
    this.viewMenu.emit(this.clickMenu);
    this.scrollsection.emit(section);
  }

}
