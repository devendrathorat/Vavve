import { TestBed } from '@angular/core/testing';

import { EmployeecommonService } from './employeecommon.service';

describe('EmployeecommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeecommonService = TestBed.get(EmployeecommonService);
    expect(service).toBeTruthy();
  });
});
