import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import AOS from "aos";
import { NgClass, NgIf } from '@angular/common';
import { AboutComponent } from './about/about-me/about.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, NgIf, NgClass,
    AboutComponent, ServicesComponent, SkillsComponent, ContactComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showMenu : boolean = false;

  ngOnInit() {
    AOS.init();
  }
 
  onClickMenu(){
    this.showMenu = !this.showMenu
  }

  getMenuStatus(data : boolean){
    this.showMenu = !data;
  }

  scrollTop(){
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
  }

  @HostListener('window:scroll', [])
  onscroll() : any{
    if(window.scrollY > 600){
      return true; 
  }
  return false;
}

@HostListener('window:scroll', [])
showNavBar() : any{
  if(window.scrollY > 200){
    return true; 
}
  return false;
}



}
