import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoporexistenciaComponent } from './estadoporexistencia.component';

describe('EstadoporexistenciaComponent', () => {
  let component: EstadoporexistenciaComponent;
  let fixture: ComponentFixture<EstadoporexistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoporexistenciaComponent]
    });
    fixture = TestBed.createComponent(EstadoporexistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
