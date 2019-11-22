import { takeLatest, call, put ,all } from 'redux-saga/effects';

import { signInSuccess } from './actions';

import api from '~/services/api';

export function* signIn({ payload }){
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if(!user.provider){
    console.tron.error('Ususrio não é prestador');
    return;
  }

  yield put(signInSuccess(token, user))

}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn)
]);
