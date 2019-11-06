/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import Wrapper from './style';

function CustomButton(props) {
  return (
    <Wrapper>
      <button variant={props.variant} className={props.className}>{props.btnText}</button>
    </Wrapper>
  );
}

CustomButton.propTypes = {
  btnText: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default CustomButton;
