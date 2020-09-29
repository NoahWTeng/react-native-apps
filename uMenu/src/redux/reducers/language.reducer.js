import {LANGUAGE_SUCCESS} from '../constants';
import es from '../../locales/es/messages.json';

const initialState = {
  language: 'es',
  catalogs: {es},
};

export const language = (state = initialState, action = {}) => {
  switch (action.type) {
    case LANGUAGE_SUCCESS:
      const {language, catalog} = action.payload;
      return {
        ...state,
        language: language,
        catalogs: {[language]: catalog},
      };

    default:
      return state;
  }
};
