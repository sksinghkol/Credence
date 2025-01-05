import { Component } from '@angular/core';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './company/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [ MenuBarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Credence';
}
