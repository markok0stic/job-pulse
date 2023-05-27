import {UserState} from "./users/store/user.state";
import {MarketState} from "./market/store/market.state";

export interface AppState{
  users: UserState
  market: MarketState
}
