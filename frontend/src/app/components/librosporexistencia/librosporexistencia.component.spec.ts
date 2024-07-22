import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosporexistenciaComponent } from './librosporexistencia.component';

describe('LibrosporexistenciaComponent', () => {
  let component: LibrosporexistenciaComponent;
  let fixture: ComponentFixture<LibrosporexistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrosporexistenciaComponent]
    });
    fixture = TestBed.createComponent(LibrosporexistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
