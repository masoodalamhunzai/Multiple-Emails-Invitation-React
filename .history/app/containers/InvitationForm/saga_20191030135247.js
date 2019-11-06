import { takeLatest, call, put, select } from 'redux-saga/effects';
import * as c from './constants';
import * as a from './actions';
import { sendInvitationApi } from './api';


export default function* sentInvitations(action) {
  try {
    const {payload} = action;
    const response = yield call(sendInvitationApi,payload);
    yield put(a.setResponse({status:response.status,message:response.message}));
    
  } catch (error) {
    if(error.response){
      yield put(a.setResponse({status:error.response.status,message:'Operation failed, try agin later'}));
    }else{
      yield put(a.setResponse({status:0,message:'Something went wrong'}));
    }
  }
}

// Individual exports for testing
export default function* invitationFormSaga() {
  // See example in containers/HomePage/saga.js
}
