import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForegPasswordComponent } from './foreg-password.component';

describe('ForegPasswordComponent', () => {
  let component: ForegPasswordComponent;
  let fixture: ComponentFixture<ForegPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForegPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForegPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
