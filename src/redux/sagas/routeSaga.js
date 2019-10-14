import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getRoutes(action) {
    try {
        const getResponse = yield axios.get('/routes');
        yield put({ type: 'SET_ROUTES', payload: getResponse.data })
      } catch(error) {
        console.log('error getting routes', error);
      }
}

function* routeSaga() {
    yield takeLatest('FETCH_ROUTES', getRoutes);
  }
export default routeSaga;