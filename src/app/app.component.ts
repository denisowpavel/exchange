import { Component, OnInit } from '@angular/core';
import { CoinService } from './coin.service';
import { ICoinGroup } from './coin.interface';
import {Observable, takeUntil} from 'rxjs';
import { BaseComponent } from './base.component';
import { Select, Store } from '@ngxs/store';
import { AddCoin } from './state/coin.actions';
import { CoinState } from './state/coin.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends BaseComponent implements OnInit {
  @Select(CoinState.groups)
  public coinGroups$?: Observable<ICoinGroup>;

  public coinGroupList?: ICoinGroup[] = [];
  constructor(private coinService: CoinService, private store: Store) {
    super();
  }

  ngOnInit() {
    this.coinService.list$
      .pipe(takeUntil(this.componentAlive$))
      .subscribe((data) => (this.coinGroupList = data));
  }

  public add(): void {
    this.store.dispatch(new AddCoin('test'));
  }
}
