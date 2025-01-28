import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import AOS from "aos";
import { NgClass, NgIf } from '@angular/common';
import { AboutComponent } from './about/about-me/about.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,HomeComponent,NgIf,NgClass,
  AboutComponent,ServicesComponent,SkillsComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  showMenu : boolean = false;

  ngOnInit() {
    AOS.init();
  }
 
  
  onShowMenuBtn(){
    this.showMenu = !this.showMenu;
  }


}
