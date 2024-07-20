import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosporautorComponent } from './librosporautor.component';

describe('LibrosporautorComponent', () => {
  let component: LibrosporautorComponent;
  let fixture: ComponentFixture<LibrosporautorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrosporautorComponent]
    });
    fixture = TestBed.createComponent(LibrosporautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
