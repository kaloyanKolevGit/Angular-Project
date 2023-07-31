import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCarCardComponent } from './vehicle-car-card.component';

describe('VehicleCarCardComponent', () => {
  let component: VehicleCarCardComponent;
  let fixture: ComponentFixture<VehicleCarCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleCarCardComponent]
    });
    fixture = TestBed.createComponent(VehicleCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
