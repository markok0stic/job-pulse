import {ShowState} from "./shows/store/show.state";
import {CustomerState} from "./customers/store/customer.state";

export interface AppState{
  shows: ShowState,
  customer: CustomerState
}
