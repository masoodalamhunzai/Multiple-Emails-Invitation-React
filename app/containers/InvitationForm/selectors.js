import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the invitationForm state domain
 */

const selectInvitationFormDomain = state =>
  state.invitationForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by InvitationForm
 */

const makeSelectInvitationForm = () =>
  createSelector(
    selectInvitationFormDomain,
    substate => substate,
  );

export default makeSelectInvitationForm;
export { selectInvitationFormDomain };
