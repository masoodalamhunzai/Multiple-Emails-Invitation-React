/**
 *
 * ConfirmInvitation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ConfirmInvitation(props) {
  const { payload } =
    props.location && props.location
      ? props.location
      : '';
    //  const emails =payload.email && payload.email.map(email=> email);
  console.log(payload.email);
  return (
    <div>
      <p>Following user received your invitation:{payload.email}</p>
    </div>
  );
}

ConfirmInvitation.propTypes = {};

export default ConfirmInvitation;
