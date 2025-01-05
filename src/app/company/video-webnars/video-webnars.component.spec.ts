import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWebnarsComponent } from './video-webnars.component';

describe('VideoWebnarsComponent', () => {
  let component: VideoWebnarsComponent;
  let fixture: ComponentFixture<VideoWebnarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoWebnarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoWebnarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
