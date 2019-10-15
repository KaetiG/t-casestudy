import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getStops(action) {
    console.log(action.payload, 'in stop saga')
    try {
        const getResponse = yield axios.get('/stops/'+action.payload.route+'/'+action.payload.direction );
        yield put({type: 'CLEAR_STOPS'})
        yield put({ type: 'SET_STOPS', payload: getResponse.data })
      } catch(error) {
        console.log('error getting stops', error);
      }
}

function* StopsSaga() {
    yield takeLatest('FETCH_STOPS', getStops);
  }
export default StopsSaga;