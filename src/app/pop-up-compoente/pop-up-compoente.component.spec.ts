import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCompoenteComponent } from './pop-up-compoente.component';

describe('PopUpCompoenteComponent', () => {
  let component: PopUpCompoenteComponent;
  let fixture: ComponentFixture<PopUpCompoenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpCompoenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpCompoenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
