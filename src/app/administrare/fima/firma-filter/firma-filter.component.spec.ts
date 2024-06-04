import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaFilterComponent } from './firma-filter.component';

describe('FirmaFilterComponent', () => {
  let component: FirmaFilterComponent;
  let fixture: ComponentFixture<FirmaFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirmaFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirmaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
