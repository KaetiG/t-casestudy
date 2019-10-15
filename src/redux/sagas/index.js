import { all } from 'redux-saga/effects';
import routeSaga from './routeSaga';
import directionsSaga from './directionsSaga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so the project so we can use them.
// This is imported in index.js as rootSaga

export default function* rootSaga() {
    yield all([
      routeSaga(),
      directionsSaga()
    ]);
  }