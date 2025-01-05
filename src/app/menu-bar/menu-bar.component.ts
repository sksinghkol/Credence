
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-menu-bar',
  imports: [RouterOutlet,CommonModule,RouterLink],
  standalone: true,
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
  
})
export class MenuBarComponent {
  logo: string='Credence Logo.png';
  iconwidth: string='250px';
iconheight: string='90px'
}

