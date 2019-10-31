import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './prosuct.module';
import { Categories } from './categories.module';
import { map } from 'rxjs/operators';

@Injectable(
)
export class RestService {

  baseUrl : string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+"products");
    
  }
  
  getCategories(): Observable<Categories[]>{
    return this.http.get<Categories[]>(this.baseUrl+"categories");
  }
}


