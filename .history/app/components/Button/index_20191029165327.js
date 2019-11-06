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
      <Button  >{props.btnText}</Button>
    </Wrapper>
  );
}

CustomButton.propTypes = {
  btnText: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default CustomButton;
