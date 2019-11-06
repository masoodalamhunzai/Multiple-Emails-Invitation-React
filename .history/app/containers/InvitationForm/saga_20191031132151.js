import { takeLatest, call, put } from 'redux-saga/effects';
import * as c from './constants';
import * as a from './actions';
import { sendInvitationApi } from './api';

export function* sentInvitations(action) {
  try {
    const { payload } = action;
    const response = yield call(sendInvitationApi, payload);
    yield put(
      a.setResponse({
        status: response.status,
        message: response.data.message,
      }),
    );
  } catch (error) {
    if (error.response) {
      yield put(
        a.setResponse({
          status: error.response.status,
          message: 'Operation failed, try agin later',
        }),
      );
    } else {
      yield put(a.setResponse({ status: 0, message: 'Something went wrong' }));
    }
  }
}

// Individual exports for testing
export default function* invitationFormSaga() {
  yield takeLatest(c.SEND_INVITATION, sentInvitations);
}
