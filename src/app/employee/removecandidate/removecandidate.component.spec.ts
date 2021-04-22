import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovecandidateComponent } from './removecandidate.component';

describe('RemovecandidateComponent', () => {
  let component: RemovecandidateComponent;
  let fixture: ComponentFixture<RemovecandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovecandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovecandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
