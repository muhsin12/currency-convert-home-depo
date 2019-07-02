import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDepotooltipComponent } from './home-depotooltip.component';

describe('HomeDepotooltipComponent', () => {
  let component: HomeDepotooltipComponent;
  let fixture: ComponentFixture<HomeDepotooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDepotooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDepotooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
