import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosporautorEditComponent } from './librosporautor-edit.component';

describe('LibrosporautorEditComponent', () => {
  let component: LibrosporautorEditComponent;
  let fixture: ComponentFixture<LibrosporautorEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrosporautorEditComponent]
    });
    fixture = TestBed.createComponent(LibrosporautorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
