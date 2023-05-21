import { UPDATE_LANG, UPDATE_TIME } from '../types/headerTypes';

export type UpdateTime = (arg: string) => { type: string; payload: string };
export const updateTime: UpdateTime = time => ({
  type: UPDATE_TIME,
  payload: time,
});

export type UpdateLang = (arg: string) => { type: string; payload: string };
export const updateLang: UpdateLang = lang => ({
  type: UPDATE_LANG,
  payload: lang,
});
