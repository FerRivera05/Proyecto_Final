import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosporexistenciaEditComponent } from './librosporexistencia-edit.component';

describe('LibrosporexistenciaEditComponent', () => {
  let component: LibrosporexistenciaEditComponent;
  let fixture: ComponentFixture<LibrosporexistenciaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrosporexistenciaEditComponent]
    });
    fixture = TestBed.createComponent(LibrosporexistenciaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
