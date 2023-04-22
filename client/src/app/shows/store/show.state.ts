import {Show} from "../models/show";

export interface ShowState {
  isLoading: boolean;
  shows:  Array<Show>;
  error: string | null;
}
