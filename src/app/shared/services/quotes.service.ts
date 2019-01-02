import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {QuoteModel} from '../models/quote/quote.model';
import {Observable} from 'rxjs';


const headers = new HttpHeaders(environment.headers);

@Injectable({
  providedIn: 'root'
})
export class QuotesService {


 // private resourceOne = '/api/quotes?api_key=avEUE84Qy3t17bmyf9n80E85ouhsXZ3j';
  private resourceOne = 'https://forex.1forge.com/1.0.3/quotes?api_key=avEUE84Qy3t17bmyf9n80E85ouhsXZ3j';



  constructor(private http: HttpClient) {}


  public getAllQotes():  any {
    return this.http.get< QuoteModel[]>(this.resourceOne, { headers: headers });
  }

}
