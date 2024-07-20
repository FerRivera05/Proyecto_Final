import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipolibroComponent } from './tipolibro.component';

describe('TipolibroComponent', () => {
  let component: TipolibroComponent;
  let fixture: ComponentFixture<TipolibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipolibroComponent]
    });
    fixture = TestBed.createComponent(TipolibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
