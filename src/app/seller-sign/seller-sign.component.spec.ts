import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSignComponent } from './seller-sign.component';

describe('SellerSignComponent', () => {
  let component: SellerSignComponent;
  let fixture: ComponentFixture<SellerSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerSignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
