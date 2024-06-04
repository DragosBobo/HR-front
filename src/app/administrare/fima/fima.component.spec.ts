import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FimaComponent } from './fima.component';

describe('FimaComponent', () => {
  let component: FimaComponent;
  let fixture: ComponentFixture<FimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FimaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
