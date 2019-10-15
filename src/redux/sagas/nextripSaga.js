import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getNextrip(action) {
    console.log(action.payload, 'in nextrip saga')
    try {
        const getResponse = yield axios.get('/nextrip/'+action.payload.route+'/'+action.payload.direction+'/'+action.payload.stop );
        yield put({type: 'CLEAR_NEXTRIP'})
        yield put({ type: 'SET_NEXTRIP', payload: getResponse.data })
      } catch(error) {
        console.log('error getting nextrip', error);
      }
}

function* NextripSaga() {
    yield takeLatest('FETCH_NEXTRIP', getNextrip);
  }
export default NextripSaga;