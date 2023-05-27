import {User} from "../types/user";

export interface UserState {
  isLoading: boolean;
  user: User | null;
  accessToken: string | null;
  error: string | null;
}
