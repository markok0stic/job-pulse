import {UserState} from "./users/store/user.state";
import {SharedState} from "./shared/store/shared.state";

export interface AppState{
  users: UserState
  shared: SharedState
}

