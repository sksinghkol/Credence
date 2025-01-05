import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  imports: [CommonModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {

  ravipath: string='images/team/ravi.jpg';
  rahulpath: string='images/team/rahul.png';
  sksinghpath: string='images/team/sksingh.jpg';
  teamwidth: string='100%';
  teamheight: string='450px'
 
}
