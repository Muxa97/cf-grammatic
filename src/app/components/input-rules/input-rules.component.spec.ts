import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRulesComponent } from './input-rules.component';

describe('InputRulesComponent', () => {
  let component: InputRulesComponent;
  let fixture: ComponentFixture<InputRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
