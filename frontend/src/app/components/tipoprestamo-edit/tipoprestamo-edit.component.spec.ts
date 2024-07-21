import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoprestamoEditComponent } from './tipoprestamo-edit.component';

describe('TipoprestamoEditComponent', () => {
  let component: TipoprestamoEditComponent;
  let fixture: ComponentFixture<TipoprestamoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoprestamoEditComponent]
    });
    fixture = TestBed.createComponent(TipoprestamoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
