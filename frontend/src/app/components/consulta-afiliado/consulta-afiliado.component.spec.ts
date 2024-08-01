import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAfiliadoComponent } from './consulta-afiliado.component';

describe('ConsultaAfiliadoComponent', () => {
  let component: ConsultaAfiliadoComponent;
  let fixture: ComponentFixture<ConsultaAfiliadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaAfiliadoComponent]
    });
    fixture = TestBed.createComponent(ConsultaAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
