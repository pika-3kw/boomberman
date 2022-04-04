import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomberComponent } from './bomber.component';

describe('BomberComponent', () => {
  let component: BomberComponent;
  let fixture: ComponentFixture<BomberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BomberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
