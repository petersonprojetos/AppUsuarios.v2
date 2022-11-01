import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapeisComponent } from './papeis.component';

describe('PapeisComponent', () => {
  let component: PapeisComponent;
  let fixture: ComponentFixture<PapeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapeisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
