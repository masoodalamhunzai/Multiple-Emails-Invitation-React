/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import Wrapper from './style';

function Button(props) {
  return (
    <Wrapper>
      <Button  className="button" variant="link" >{props.btnText}</Button>
    </Wrapper>
  );
}

Button.propTypes = {
  btnText: PropTypes.string,
};

export default Button;
