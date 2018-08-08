import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveJsComponent } from './reactive-js.component';

describe('ReactiveJsComponent', () => {
  let component: ReactiveJsComponent;
  let fixture: ComponentFixture<ReactiveJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
