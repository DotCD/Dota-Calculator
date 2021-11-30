import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleStatsComponent } from './simple-stats.component';

describe('SimpleStatsComponent', () => {
  let component: SimpleStatsComponent;
  let fixture: ComponentFixture<SimpleStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
