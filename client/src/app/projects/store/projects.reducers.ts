import {createReducer, on} from "@ngrx/store";
import {ProjectState} from "./project.state";
import {Filter} from "../types/Filter";

export const initialState: ProjectState = {
  activeFilters: new Array<Filter>()
};

export const reducers = createReducer(
  initialState
  )
