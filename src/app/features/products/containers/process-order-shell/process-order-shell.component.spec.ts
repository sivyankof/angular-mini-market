import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessOrderShellComponent } from './process-order-shell.component';

describe('ProcessOrderShellComponent', () => {
  let component: ProcessOrderShellComponent;
  let fixture: ComponentFixture<ProcessOrderShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessOrderShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessOrderShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
