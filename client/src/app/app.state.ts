import {ShowState} from "./shows/store/show.state";
import {CustomerState} from "./customer/store/customer.state";

export interface AppState{
  shows: ShowState,
  customer: CustomerState
}
