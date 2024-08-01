import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosporfechaComponent } from './librosporfecha.component';

describe('LibrosporfechaComponent', () => {
  let component: LibrosporfechaComponent;
  let fixture: ComponentFixture<LibrosporfechaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrosporfechaComponent]
    });
    fixture = TestBed.createComponent(LibrosporfechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
