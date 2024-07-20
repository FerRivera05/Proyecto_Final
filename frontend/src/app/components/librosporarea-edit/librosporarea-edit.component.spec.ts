import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosporareaEditComponent } from './librosporarea-edit.component';

describe('LibrosporareaEditComponent', () => {
  let component: LibrosporareaEditComponent;
  let fixture: ComponentFixture<LibrosporareaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrosporareaEditComponent]
    });
    fixture = TestBed.createComponent(LibrosporareaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
