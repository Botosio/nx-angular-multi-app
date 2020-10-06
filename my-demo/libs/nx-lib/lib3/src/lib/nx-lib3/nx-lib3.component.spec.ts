import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxLib3Component } from './nx-lib3.component';

describe('NxLib3Component', () => {
  let component: NxLib3Component;
  let fixture: ComponentFixture<NxLib3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NxLib3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NxLib3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
