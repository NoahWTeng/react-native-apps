import {combineReducers} from 'redux';

import {language} from './language.reducer';

export const rootReducer = combineReducers({
  language,
});
