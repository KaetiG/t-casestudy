import { combineReducers } from 'redux';
import routeReducer from './routeReducer';
import directionsReducer from './directionsReducer'



// rootReducer is the primary reducer for the entire app
// It bundles up all of the other reducers so the app can use them.
// This is imported in index.js as rootSaga

const rootReducer = combineReducers({
    routeReducer,
    directionsReducer
  });
  
  export default rootReducer;