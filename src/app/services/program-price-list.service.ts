import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramPriceList } from '../models/programPriceList';

@Injectable({
  providedIn: 'root'
})
export class ProgramPriceListService {
  baseUrl: string = 'https://localhost:7231/api';
  constructor(private http: HttpClient) { }

  getAll(): Observable<ProgramPriceList[]>{
    return this.http.get<ProgramPriceList[]>(`${this.baseUrl}/PriceLists`);
  }

  getPriceListById(id: number): Observable<ProgramPriceList>{
    return this.http.get<ProgramPriceList>(`${this.baseUrl}/PriceLists/${id}`);
  }
}
