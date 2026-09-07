import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desgination } from './desgination';

describe('Desgination', () => {
  let component: Desgination;
  let fixture: ComponentFixture<Desgination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desgination],
    }).compileComponents();

    fixture = TestBed.createComponent(Desgination);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
