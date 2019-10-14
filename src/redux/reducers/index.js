import { combineReducers } from 'redux';
import routeReducer from './routeReducer'



// rootReducer is the primary reducer for the entire app
// It bundles up all of the other reducers so the app can use them.
// This is imported in index.js as rootSaga

const rootReducer = combineReducers({
    routeReducer
  });
  
  export default rootReducer;