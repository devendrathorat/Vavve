import { Component, OnInit } from '@angular/core';
import { EmployeecommonService } from 'src/app/employeecommon.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  
  candidate_data:any=[{}];
  tempArr:any;
  constructor(private _empService:EmployeecommonService) { }

 


  headingName:String ="All candidates with experience more than 2 years";

  ngOnInit() {

    this.tempArr = this._empService.candidate_datafrmService;

            for (let entry of this.tempArr) {
               // console.log('entry', entry.joining_date)
                let date1:any = new Date(entry.joining_date); 
                let date2:any = new Date();
                let diffDays:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
              //  console.log('diffDays',diffDays);
            
                if(diffDays > 730){
                 // delete entry[entry.id];

                 this.candidate_data.push({
                  name: entry.name, 
                  department:  entry.department,
                  joining_date:  entry.joining_date
              });

                }
            }
           console.log(this.candidate_data);
   
  
    
  }

}
