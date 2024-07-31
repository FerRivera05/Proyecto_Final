import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoReporteComponent } from './prestamo-reporte.component';

describe('PrestamoReporteComponent', () => {
  let component: PrestamoReporteComponent;
  let fixture: ComponentFixture<PrestamoReporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamoReporteComponent]
    });
    fixture = TestBed.createComponent(PrestamoReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
