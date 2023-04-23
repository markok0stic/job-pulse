import {Customer} from "../models/customer";

export interface CustomerState {
  isLoading: boolean;
  customer: Customer | null;
  accessToken: string | null;
  error: string | null;
}
