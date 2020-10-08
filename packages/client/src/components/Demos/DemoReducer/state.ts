export const INITIAL_STATE = {
  logged: false,
} as const;

export type UnloggedState = typeof INITIAL_STATE;

export type LoggedState = Readonly<{
  logged: true;
  name: string;
  surname: string;
}>;

export type State = UnloggedState | LoggedState;
