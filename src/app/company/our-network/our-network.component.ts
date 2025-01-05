import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-network',
  imports: [MatTabsModule, MatExpansionModule, MatCardModule, CommonModule,],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './our-network.component.html',
  styleUrl: './our-network.component.css',
  
})
export class OurNetworkComponent {

  ravipath: string='images/team/ravi.jpg';
  sksinghpath: string='images/team/sksingh.jpg';
  npath: string='images/network.jpg';
  nopath: string='no pic.jpg';
  readonly panelOpenState = signal(false);
  BrSiwan1 = 'S K Singh - 1st Floor Azad Market , Barharia -Siwan.';
  BrSiwan2 = 'Md. Faiz - 1st Floor Paradise Computer Center ,Ramrajya More, Behind Vishal Mega Mart -Siwan.';
  BrSiwan3 = 'Sachin Yadav, Dindyalpur, Near PNBE Bank, Tarwara Road , Siwan';
  BrSiwan4 = 'Star Computer, Hospital Road, Near Bank Of India';
  WbDurgapur = 'Ravikant - Sepco Township, B-zone, Durgapur. Westbengal';
  WbKolkata = 'S.k Singh, Milan Pally , Madhyamgram   ' ;
  JrBokaro ='Kumar Gaurav - RamnagarColony, Chas, Bokaro';
  JrDhanbad ='Abhishek Singh - Shine Computer ,Bank Colony More, Dhanbad  -Jharkhand';
}
