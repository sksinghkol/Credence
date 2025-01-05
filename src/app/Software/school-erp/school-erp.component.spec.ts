import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolErpComponent } from './school-erp.component';

describe('SchoolErpComponent', () => {
  let component: SchoolErpComponent;
  let fixture: ComponentFixture<SchoolErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolErpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
