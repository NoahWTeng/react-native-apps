import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {languageMdl} from './middlewares';
import {rootReducer} from './reducers';

if (process.env.NODE_ENV !== 'production') {
  // middleware.push();
}
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...languageMdl)),
);
