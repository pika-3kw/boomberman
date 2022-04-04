import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftWallComponent } from './soft-wall.component';

describe('SoftWallComponent', () => {
  let component: SoftWallComponent;
  let fixture: ComponentFixture<SoftWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftWallComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
