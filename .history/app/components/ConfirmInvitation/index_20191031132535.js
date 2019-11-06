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
    props.location && props.location.payload && props.location.payload.email
      ? props.location.payload.email
      : '';
  console.log(props);
  return (
    <div>
      <p>Following user received your invitation:{email}</p>
    </div>
  );
}

ConfirmInvitation.propTypes = {};

export default ConfirmInvitation;
