/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Wrapper from './style';

function Buttons(props) {
  return (
    <Wrapper>
      <Button className="button" value={props.value}>
        {props.btnText}
      </Button>
    </Wrapper>
  );
}

Button.propTypes = {
  btnText: PropTypes.string,
};

export default Button;
