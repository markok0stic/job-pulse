import {UserState} from "./users/store/user.state";
import {SharedState} from "./shared/store/shared.state";
import {ProjectState} from "./projects/store/project.state";

export interface AppState{
  users: UserState
  shared: SharedState
  projects: ProjectState
}

