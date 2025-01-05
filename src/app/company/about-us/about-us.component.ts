import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
innovationpath: string='images/icon/innovation.png';
customazationpath: string='images/icon/customazation.png';
highqualitypath: string='images/icon/high-quality.gif';
reliabitypath: string='images/icon/reliability.png';
goalpath: string='images/icon/goal.png';
journeypath: string='images/icon/journey.png';
iconwidth: string='70px';
iconheight: string='70px'
growingpath: string='images/growig.jpg';
}
