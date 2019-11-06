/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';

function Button(props) {
  console.log(props.btnText);
  return (
    <Wrapper>
      <button className="button" variant="primary">{props.btnText}</button>
    </Wrapper>
  );
}

Button.propTypes = {
  btnText: PropTypes.string,
};

export default Button;
