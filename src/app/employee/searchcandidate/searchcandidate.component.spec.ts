import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcandidateComponent } from './searchcandidate.component';

describe('SearchcandidateComponent', () => {
  let component: SearchcandidateComponent;
  let fixture: ComponentFixture<SearchcandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
