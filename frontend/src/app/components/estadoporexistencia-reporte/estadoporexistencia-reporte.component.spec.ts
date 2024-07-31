import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoporexistenciaReporteComponent } from './estadoporexistencia-reporte.component';

describe('EstadoporexistenciaReporteComponent', () => {
  let component: EstadoporexistenciaReporteComponent;
  let fixture: ComponentFixture<EstadoporexistenciaReporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoporexistenciaReporteComponent]
    });
    fixture = TestBed.createComponent(EstadoporexistenciaReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
