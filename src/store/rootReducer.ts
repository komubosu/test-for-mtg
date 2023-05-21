import { combineReducers } from 'redux';
import { headerReducer } from './reducers/headerReducer';

export const rootReducer = combineReducers({
  header: headerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
