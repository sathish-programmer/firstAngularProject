import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupHeaderComponent } from './startup-header.component';

describe('StartupHeaderComponent', () => {
  let component: StartupHeaderComponent;
  let fixture: ComponentFixture<StartupHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
