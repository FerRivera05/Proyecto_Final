import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoporexistenciaEditComponent } from './estadoporexistencia-edit.component';

describe('EstadoporexistenciaEditComponent', () => {
  let component: EstadoporexistenciaEditComponent;
  let fixture: ComponentFixture<EstadoporexistenciaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoporexistenciaEditComponent]
    });
    fixture = TestBed.createComponent(EstadoporexistenciaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
