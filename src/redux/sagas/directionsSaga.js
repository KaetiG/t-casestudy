import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getDirections(action) {
    try {
        const getResponse = yield axios.get('/directions/' + action.payload );
        console.log(action.payload)
        yield put({ type: 'SET_DIRECTIONS', payload: getResponse.data })
      } catch(error) {
        console.log('error getting routes', error);
      }
}

function* directionsSaga() {
    yield takeLatest('FETCH_DIRECTIONS', getDirections);
  }
export default directionsSaga;