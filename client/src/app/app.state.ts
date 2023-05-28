import {UserState} from "./users/store/user.state";
import {MarketState} from "./core/store/market.state";

export interface AppState{
  users: UserState
  market: MarketState
}
