import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerLoginComponent } from './buyerlogin.component';

describe('BuyerloginComponent', () => {
  let component: BuyerLoginComponent;
  let fixture: ComponentFixture<BuyerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
