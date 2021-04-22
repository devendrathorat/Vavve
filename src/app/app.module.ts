import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { SortbynameComponent } from './employee/sortbyname/sortbyname.component';
import { ExperienceComponent } from './employee/experience/experience.component';
import { RemovecandidateComponent } from './employee/removecandidate/removecandidate.component';
import { SearchcandidateComponent } from './employee/searchcandidate/searchcandidate.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SortbynameComponent,
    ExperienceComponent,
    RemovecandidateComponent,
    SearchcandidateComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
