import { Component } from '@angular/core';
import { ExperianceComponent } from '../experiance/experiance.component';

@Component({
  selector: 'app-about',
  standalone:true ,
  imports : [ExperianceComponent],
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {

}
