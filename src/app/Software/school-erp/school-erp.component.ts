import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-school-erp',
  imports: [CommonModule],
  templateUrl: './school-erp.component.html',
  styleUrl: './school-erp.component.css'
})
export class SchoolErpComponent {
  reports: string='Software/reports.png';
  library: string='Software/library.png';
  acc: string='Software/acc.png';
  erp: string='Software/erp.png';
  stdt: string='Software/Student access.png';
  fee: string='Software/fee.png';
  reliability: string='images/icon/reliability.png';
  workpath: string='images/icon/work.png';
  hr: string='Software/hr.png';
  attenpath: string='Software/attendence.png';
  teacherpath: string='Software/teacher.png';
  studentpath: string='Software/student.png';
  parrentpath: string='Software/parrent.png';
  parentpath: string='Software/parent.png';
  reqpath: string='images/icon/requirement.png';
  management: string='Software/management.png';
  iconwidth: string='70px';
  iconheight: string='70px'
}
