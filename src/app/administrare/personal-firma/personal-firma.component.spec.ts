import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalFirmaComponent } from './personal-firma.component';

describe('PersonalFirmaComponent', () => {
  let component: PersonalFirmaComponent;
  let fixture: ComponentFixture<PersonalFirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalFirmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
