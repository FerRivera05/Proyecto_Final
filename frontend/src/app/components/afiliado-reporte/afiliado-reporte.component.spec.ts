import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliadoReporteComponent } from './afiliado-reporte.component';

describe('AfiliadoReporteComponent', () => {
  let component: AfiliadoReporteComponent;
  let fixture: ComponentFixture<AfiliadoReporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfiliadoReporteComponent]
    });
    fixture = TestBed.createComponent(AfiliadoReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
