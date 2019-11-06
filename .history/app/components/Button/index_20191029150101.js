/**
 *
 * Button
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Button } from 'react-bootstrap';
import Wrapper from './style';

function Buttons(props) {
  return (
    <Wrapper>
      <Button className="button"  value={props.text}>
    </Wrapper>
  );
}

Button.propTypes = {};

export default Button;
