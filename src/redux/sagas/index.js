import { all } from 'redux-saga/effects';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so the project so we can use them.
// This is imported in index.js as rootSaga

export default function* rootSaga() {
    yield all([
      //saga here()
    ]);
  }