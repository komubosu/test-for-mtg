import { UPDATE_LANG, UPDATE_TIME } from '../types/headerTypes';

export type HeaderState = {
  time: string;
  lang: 'ru' | 'en';
};

const initialState: HeaderState = {
  time: '',
  lang: 'ru',
};

export const headerReducer = (
  state: HeaderState = initialState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case UPDATE_TIME:
      return { ...state, time: action.payload };

    case UPDATE_LANG:
      return { ...state, lang: action.payload };

    default:
      return state;
  }
};
