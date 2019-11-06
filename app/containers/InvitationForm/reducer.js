/*
 *
 * InvitationForm reducer
 *
 */
import produce from 'immer';
import * as c from './constants';

export const initialState = {
  loading: false,
  response: null,
};

/* eslint-disable default-case, no-param-reassign */
const invitationFormReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case c.DEFAULT_ACTION:
        return state;
      case c.SEND_INVITATION:
        return { ...state, loading: true };
      case c.SET_RESPONSE:
        return { ...state, response: action.payload, loading: false };
      default:
        return state;
    }
  });

export default invitationFormReducer;
