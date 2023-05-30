import {UserState} from "./users/store/user.state";
import {CoreState} from "./core/store/core.state";

export interface AppState{
  users: UserState
  market: CoreState
}
