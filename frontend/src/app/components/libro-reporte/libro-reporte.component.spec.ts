import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroReporteComponent } from './libro-reporte.component';

describe('LibroReporteComponent', () => {
  let component: LibroReporteComponent;
  let fixture: ComponentFixture<LibroReporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroReporteComponent]
    });
    fixture = TestBed.createComponent(LibroReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
