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
    props.location && props.location ? props.location.payload : '';
  const emails = email && email.map(email => email);
  return (
    <div>
      <p>
        Following user received your invitation: 
        <span>
          {email &&
            email.map(item => {
              return item.value;
            })}
        </span>
      </p>
    </div>
  );
}

ConfirmInvitation.propTypes = {};

export default ConfirmInvitation;
