import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ICoinGroup } from '../coin.interface';
import { AddCoin } from './coin.actions';

interface ICoinState {
  groups: ICoinGroup[];
}

@State<ICoinState>({
  name: 'coin',
})
@Injectable()
export class CoinState {
  @Selector()
  static groups(state: ICoinState): ICoinGroup[] {
    return state.groups;
  }

  @Action(AddCoin)
  AddCoin(ctx: StateContext<ICoinState>, name: string) {
    const state = ctx.getState();
    ctx.setState({
      groups: [{ label: name, coins: [] }],
    });
  }
}
