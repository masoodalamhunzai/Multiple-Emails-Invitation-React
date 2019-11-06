/**
 *
 * ConfirmInvitation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ConfirmInvitation(props) {
  const { email } =
    props.location && props.location.payload
      ? props.location.payload
      : '';
      const emails = email && email.map(email=> email);
  console.log(emails);
  return (
    <div>
      <p>Following user received your invitation:{emails}</p>
    </div>
  );
}

ConfirmInvitation.propTypes = {};

export default ConfirmInvitation;
