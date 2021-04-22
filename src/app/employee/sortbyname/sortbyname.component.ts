import { Component, OnInit } from '@angular/core';
import { EmployeecommonService } from 'src/app/employeecommon.service';

@Component({
  selector: 'app-sortbyname',
  templateUrl: './sortbyname.component.html',
  styleUrls: ['./sortbyname.component.css']
})
export class SortbynameComponent implements OnInit {

  candidate_data;

  headingName:String ="Sort By Name";

  constructor(private _empService:EmployeecommonService) {

   }
   

  ngOnInit() {

  this.candidate_data = this._empService.candidate_datafrmService.sort(function(a,b){
    return a.name.localeCompare(b.name);
})




  }

}
