import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosporareaComponent } from './librosporarea.component';

describe('LibrosporareaComponent', () => {
  let component: LibrosporareaComponent;
  let fixture: ComponentFixture<LibrosporareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrosporareaComponent]
    });
    fixture = TestBed.createComponent(LibrosporareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
