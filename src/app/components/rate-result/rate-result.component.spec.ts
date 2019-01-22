import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateResultComponent } from './rate-result.component';

describe('RateResultComponent', () => {
  let component: RateResultComponent;
  let fixture: ComponentFixture<RateResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
