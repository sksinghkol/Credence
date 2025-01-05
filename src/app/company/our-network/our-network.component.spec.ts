import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNetworkComponent } from './our-network.component';

describe('OurNetworkComponent', () => {
  let component: OurNetworkComponent;
  let fixture: ComponentFixture<OurNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurNetworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
