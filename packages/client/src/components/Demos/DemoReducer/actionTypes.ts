export const ACTION_TYPES = {
  logout: 'logout',
  login: 'login',
  updateData: 'updateData',
} as const;

export type ActionTypes = typeof ACTION_TYPES;
