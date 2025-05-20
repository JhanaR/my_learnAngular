import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTryComponent } from './class-try.component';

describe('ClassTryComponent', () => {
  let component: ClassTryComponent;
  let fixture: ComponentFixture<ClassTryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassTryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
