import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliadoEditComponent } from './afiliado-edit.component';

describe('AfiliadoEditComponent', () => {
  let component: AfiliadoEditComponent;
  let fixture: ComponentFixture<AfiliadoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfiliadoEditComponent]
    });
    fixture = TestBed.createComponent(AfiliadoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
