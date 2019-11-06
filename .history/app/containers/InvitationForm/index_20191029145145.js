/**
 *
 * InvitationForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectInvitationForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function InvitationForm() {
  useInjectReducer({ key: 'invitationForm', reducer });
  useInjectSaga({ key: 'invitationForm', saga });

  return (
    <div>
      <Helmet>
        <title>InvitationForm</title>
        <meta name="description" content="Description of InvitationForm" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

InvitationForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  invitationForm: makeSelectInvitationForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(InvitationForm);
