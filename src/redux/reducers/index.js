import { combineReducers } from 'redux';
import routeReducer from './routeReducer';
import directionsReducer from './directionsReducer';
import stopsReducer from './stopsReducer';
import singleRouteReducer from './singleRouteReducer';
import selectedDirectionReducer from './selectedDirectionReducer';
import selectedStopReducer from './selectedStopReducer';



// rootReducer is the primary reducer for the entire app
// It bundles up all of the other reducers so the app can use them.
// This is imported in index.js as rootSaga

const rootReducer = combineReducers({
  routeReducer,
  directionsReducer,
  stopsReducer,
  singleRouteReducer,
  selectedDirectionReducer,
  selectedStopReducer
});

export default rootReducer;