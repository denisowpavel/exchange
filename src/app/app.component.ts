import { Component, OnInit } from '@angular/core';
import { CoinService } from './coin.service';
import {ICoinGroup} from "./coin.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public coinGroupList?: ICoinGroup[] = [];
  constructor(private coinService: CoinService) {}

  ngOnInit() {
    this.coinService.list$.subscribe(data => this.coinGroupList = data);
  }
}
