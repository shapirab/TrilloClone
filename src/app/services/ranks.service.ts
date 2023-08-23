import { Injectable } from '@angular/core';
import { Rank } from '../models/rank';

@Injectable({
  providedIn: 'root'
})
export class RanksService {
  ranks: Rank[];
  constructor() {
    this.provideTestRanks();
  }


  provideTestRanks(){
    this.ranks = [
      { id: 1, name: 'No rank'},
      { id: 2, name: 'A'},
      { id: 3, name: 'B'},
      { id: 4, name: 'C'}
    ];
  }

  getAll(){
    return this.ranks;
  }
}
