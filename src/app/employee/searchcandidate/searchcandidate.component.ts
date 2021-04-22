import { Component, OnInit } from '@angular/core';
import { EmployeecommonService } from 'src/app/employeecommon.service';

@Component({
  selector: 'app-searchcandidate',
  templateUrl: './searchcandidate.component.html',
  styleUrls: ['./searchcandidate.component.css']
})
export class SearchcandidateComponent implements OnInit {

  candidate_data;

  headingName:String ="Search by name.";

  searchedKeyword: string;
  
  constructor(private _empService:EmployeecommonService) {

  }

  ngOnInit() {
 
    this.candidate_data = this._empService.candidate_datafrmService;
   }

}
