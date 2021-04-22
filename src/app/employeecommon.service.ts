import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeecommonService {

  
  candidate_datafrmService=[ {
    "id": 11,
    "name": "Ash",
    "department": "Finance",
    "joining_date": "8 oct 2021"
},
{"id": 12,"name": "John","department": "HR","joining_date": "18 jan 2011"},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "28 oct 2019"},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": "7 jul 2017"},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": "19 aug 2014"},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": "5 oct 2014"}, 
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": "6 apr 2014"},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": "8 feb 2010"}, 
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": "7 may 2011"},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": "20 oct 2010"}]


  constructor() { }
}
