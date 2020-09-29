import {LANGUAGE_SUCCESS, LANGUAGE_PROCESS} from '../constants';

const languageProcess = ({dispatch}) => (next) => (action) => {
  next(action);
  if (action.type === LANGUAGE_PROCESS) {
  }
};

const updateLanguageSuccess = ({dispatch}) => (next) => (action) => {
  next(action);
  if (action.type === LANGUAGE_SUCCESS) {
  }
};

export const languageMdl = [languageProcess, updateLanguageSuccess];
