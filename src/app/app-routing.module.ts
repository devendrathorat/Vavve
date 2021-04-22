import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortbynameComponent } from './employee/sortbyname/sortbyname.component';
import { ExperienceComponent } from './employee/experience/experience.component';
import { RemovecandidateComponent } from './employee/removecandidate/removecandidate.component';
import { SearchcandidateComponent } from './employee/searchcandidate/searchcandidate.component';




const routes: Routes = [
  
  { path: 'sortByName', component:  SortbynameComponent},
   { path: 'searchByName', component: SearchcandidateComponent },
   { path: 'experience', component: ExperienceComponent },
   { path: 'removeCandidate', component: RemovecandidateComponent },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
