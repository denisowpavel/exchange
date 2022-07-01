import { Component, OnInit } from '@angular/core';
import { CoinService } from './coin.service';
import { ICoinGroup } from './coin.interface';
import { Subject, takeUntil } from 'rxjs';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends BaseComponent implements OnInit {
  public coinGroupList?: ICoinGroup[] = [];
  constructor(private coinService: CoinService) {
    super();
  }

  ngOnInit() {
    this.coinService.list$
      .pipe(takeUntil(this.componentAlive$))
      .subscribe((data) => (this.coinGroupList = data));
  }
}
