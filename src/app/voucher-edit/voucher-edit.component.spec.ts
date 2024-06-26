import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherEditComponent } from './voucher-edit.component';

describe('VoucherEditComponent', () => {
  let component: VoucherEditComponent;
  let fixture: ComponentFixture<VoucherEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoucherEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoucherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
