import { Component, OnInit } from '@angular/core';
import { EmployeecommonService } from 'src/app/employeecommon.service';

@Component({
  selector: 'app-removecandidate',
  templateUrl: './removecandidate.component.html',
  styleUrls: ['./removecandidate.component.css']
})
export class RemovecandidateComponent implements OnInit {

  headingName:String ="Remove all candidates from 'Development' department";


  candidate_data:any=[{}];
  tempArr:any;
  constructor(private _empService:EmployeecommonService) { }

 
  ngOnInit() {

    this.tempArr = this._empService.candidate_datafrmService;
    for (let entry of this.tempArr) {

      if(entry.department != 'Development'){
        
        
        this.candidate_data.push({
          name: entry.name, 
          department:  entry.department,
          joining_date:  entry.joining_date
      });
      
      }

    }
  }

}
