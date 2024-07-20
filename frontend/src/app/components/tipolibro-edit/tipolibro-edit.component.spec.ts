import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipolibroEditComponent } from './tipolibro-edit.component';

describe('TipolibroEditComponent', () => {
  let component: TipolibroEditComponent;
  let fixture: ComponentFixture<TipolibroEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipolibroEditComponent]
    });
    fixture = TestBed.createComponent(TipolibroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
