//This file contains the methods that serve as a direct connection to the API

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //this creates a read-only variable with the link to the port the API is listening on. This can be changed both here and in the API
  //if you wish to have the API listen on a different port. Ensure it is changed there before this variable is changed.
  readonly APIUrl="http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  //this method sends an HTTP Get request to the PeopleController in the API and returns the full list of data from the query in that method
  getPeopleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/people');
  }

  //this method sends an HTTP POST request to the PeopleController in the API with the data passed to it and returns either "added successfully" or "failed to add" depending on whether or not it was successful
  addPeople(val:any){
    return this.http.post(this.APIUrl+'/people',val);
  }

  //this method sends an HTTP PUT request to the PeopleController in the API with the data passed to it and returns either "updated successfully" or "failed to update" depending on whether or not it was successful
  updatePeople(val:any){
    return this.http.put(this.APIUrl+'/people',val);
  }

  //This method sends an HTTP DELETE request to the PeopleController in the API with the value passed to it and returns either "deleted successfully" or "failed to delete" depending on whether or not it was successful
  deletePeople(val:any){
    return this.http.delete(this.APIUrl+'/people/'+ val);
  }
}
