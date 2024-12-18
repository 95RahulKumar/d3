import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalPracticeComponent } from './signal-practice.component';

describe('SignalPracticeComponent', () => {
  let component: SignalPracticeComponent;
  let fixture: ComponentFixture<SignalPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
