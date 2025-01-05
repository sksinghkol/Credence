
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  empower: string='Home/empower.jpg';
  Credence1: string='Events/Credence1.jpg';
  Credence2: string='Events/Credence2.jpg';
  Credence3: string='Events/Credence3.jpg';
  Credence4: string='Events/Credence4.jpg';
  Credence5: string='Events/Credence5.jpg';
  Credence6: string='Events/Credence6.jpg';
  Credence7: string='Events/Credence7.jpg';
  Credence8: string='Events/Credence8.jpg';
  Credence9: string='Events/Credence9.jpg';
  Credence10: string='Events/Credence10.jpg';
  Credence11: string='Events/Credence11.jpg';
  Credence12: string='Events/Credence12.jpg';
  Credence13: string='Events/Credence13.jpg';
  journeypath: string='images/icon/erp.png';
  iconwidth: string='70px';
iconheight: string='70px'
  
}
