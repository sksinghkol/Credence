import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  imports: [CommonModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})

export class CareerComponent {
  careerpath: string='images/career.jpg';
  supportpath: string='images/icon/support.png';
  earningpath: string='images/icon/earning.png';
  qualipath: string='images/icon/qualifiction.png';
  reqpath: string='images/icon/requirement.png';
  reliabitypath: string='images/icon/reliability.png';
  sharingpath: string='images/icon/sharing.png';
  workpath: string='images/icon/work.png';
  iconwidth: string='70px';
  iconheight: string='70px'
}

