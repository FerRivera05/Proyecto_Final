import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosporafiliadoComponent } from './librosporafiliado.component';

describe('LibrosporafiliadoComponent', () => {
  let component: LibrosporafiliadoComponent;
  let fixture: ComponentFixture<LibrosporafiliadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrosporafiliadoComponent]
    });
    fixture = TestBed.createComponent(LibrosporafiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
