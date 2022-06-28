import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { ICoinGroup } from './coin.interface';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private coinList$?: Observable<any>;
  constructor(private http: HttpClient) {}

  initList(): Observable<ICoinGroup[]> {
    this.coinList$ = this.http
      .get<ICoinGroup[]>('/assets/moc/coin-list.json')
      .pipe(shareReplay(1));
    return this.coinList$;
  }

  get list$(): Observable<ICoinGroup[]> {
    if (this.coinList$) {
      return this.coinList$;
    } else return this.initList();
  }
}
