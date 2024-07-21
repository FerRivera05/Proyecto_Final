import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoprestamoComponent } from './tipoprestamo.component';

describe('TipoprestamoComponent', () => {
  let component: TipoprestamoComponent;
  let fixture: ComponentFixture<TipoprestamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoprestamoComponent]
    });
    fixture = TestBed.createComponent(TipoprestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
