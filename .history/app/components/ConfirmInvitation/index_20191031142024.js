/**
 *
 * ConfirmInvitation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ConfirmInvitation(props) {
  const  payload  =
    props.location && props.location
      ? props.location.payload
      : '';
      const emails =payload.email && payload.email.map(email=> email);
  console.log(emails);
  return (
    <div>
      <p>Following user received your invitation:{payload}</p>
    </div>
  );
}

ConfirmInvitation.propTypes = {};

export default ConfirmInvitation;
