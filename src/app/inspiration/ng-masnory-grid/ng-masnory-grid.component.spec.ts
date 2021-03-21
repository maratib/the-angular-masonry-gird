import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMasnoryGridComponent } from './ng-masnory-grid.component';

describe('NgMasnoryGridComponent', () => {
  let component: NgMasnoryGridComponent;
  let fixture: ComponentFixture<NgMasnoryGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMasnoryGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMasnoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
