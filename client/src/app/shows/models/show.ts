import {Actor} from "./actor";
import {PerformanceDay} from "./performanceDay";

export interface Show{
  id: string;
  name: string;
  description: string;
  actors: Array<Actor>;
  lastPerformanceDay: PerformanceDay;
  nextPerformanceDay: PerformanceDay;
  performanceDays: Array<PerformanceDay>;
}
