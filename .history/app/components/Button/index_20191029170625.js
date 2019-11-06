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
      <Button type={props.type} variant={props.variant} className={props.className}>{props.btnText}</Button>
    </Wrapper>
  );
}

CustomButton.propTypes = {
  btnText: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default CustomButton;
