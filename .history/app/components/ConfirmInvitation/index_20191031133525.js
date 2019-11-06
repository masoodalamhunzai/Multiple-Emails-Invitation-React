/**
 *
 * ConfirmInvitation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ConfirmInvitation(props) {
  const { payload,email } =
    props.location && props.location
      ? props.location
      : '';
      const emails = email && email.map(email=> email);
  console.log(props);
  return (
    <div>
      <p>Following user received your invitation:{emails}</p>
    </div>
  );
}

ConfirmInvitation.propTypes = {};

export default ConfirmInvitation;
