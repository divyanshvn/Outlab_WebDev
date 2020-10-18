import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './data';

@Injectable({
  providedIn: 'root'
})

export class GpService {

  private URL = 'https://cs251-outlab-6.herokuapp.com/initial_values/';
  private PostURL = "https://cs251-outlab-6.herokuapp.com/add_new_feedback/";

  constructor(private http: HttpClient) { }

  getdata(){
    return this.http.get<data>(this.URL);
  }

  reg(userData){
    return this.http.post<any>(this.PostURL,userData);
  }
}