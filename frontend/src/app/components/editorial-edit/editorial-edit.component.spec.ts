import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialEditComponent } from './editorial-edit.component';

describe('EditorialEditComponent', () => {
  let component: EditorialEditComponent;
  let fixture: ComponentFixture<EditorialEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorialEditComponent]
    });
    fixture = TestBed.createComponent(EditorialEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
