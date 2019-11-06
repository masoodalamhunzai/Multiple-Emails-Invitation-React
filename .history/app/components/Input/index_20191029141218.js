/**
 *
 * Input
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Input() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Input.propTypes = {};

export default Input;
