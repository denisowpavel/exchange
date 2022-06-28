import { Component, OnInit } from '@angular/core';
import { CoinService } from './coin.service';
import {Observable, share, shareReplay, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private coinList$?: Observable<any>;
  constructor(private coinService: CoinService) {}

  ngOnInit() {
    this.coinList$ = this.coinService.getList().pipe(shareReplay(1));
    console.log(this.coinList$ )
    this.coinList$.subscribe(console.log)
    setTimeout(()=>{
      this.coinList$?.subscribe(console.log);
    },0);
    setTimeout(()=>{
      this.coinList$?.subscribe(console.log);
    },250);
    setTimeout(()=>{
      this.coinList$?.subscribe(console.log);
    },500);
    setTimeout(()=>{
      this.coinList$?.subscribe(console.log);
    },750);

  }
}
