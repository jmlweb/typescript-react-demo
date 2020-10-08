import { User } from '@re-starter/common';

export type UserState = Record<keyof User, User[keyof User] | null>;

export type State = UserState & {
  isLoading: boolean,
  error: null | string,
};

export type ContextValue = State & {
  login: (email: string, password: string) => Promise<void>,
  logout: () => Promise<void>
};
