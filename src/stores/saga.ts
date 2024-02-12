// sagas.ts
import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_ITEMS, FETCH_ITEMS_SUCCESS } from './action';

function* fetchItemsSaga(): Generator<any, any, any> {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos');
    const items = yield response.json();
    yield put({ type: FETCH_ITEMS_SUCCESS, payload: items });
  } catch (error) {
    console.error('Error fetching items', error);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_ITEMS, fetchItemsSaga);
}

// here we can implement other update delete operations