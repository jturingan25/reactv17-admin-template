import { all } from 'redux-saga/effects';
import authSagas from '@tminds/redux/auth/saga';


export default function* rootSaga(getState) {
  yield all([
    authSagas(),
  ]);
}
