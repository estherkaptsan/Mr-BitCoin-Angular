import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunsferFundComponent } from './trunsfer-fund.component';

describe('TrunsferFundComponent', () => {
  let component: TrunsferFundComponent;
  let fixture: ComponentFixture<TrunsferFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrunsferFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrunsferFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
