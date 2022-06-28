import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {publishLast, share, shareReplay} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  constructor(private http: HttpClient) {}

  getList() {
      return this.http.get<any>('/assets/moc/coin-list.json');
  }
}
