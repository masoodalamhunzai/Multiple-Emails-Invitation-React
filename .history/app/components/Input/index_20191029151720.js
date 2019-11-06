/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';
function Input(props) {
  return (
    <Wrapper>
      <input type={props.text} placeholder={props.placeholder} />
    </Wrapper>
  );
}

Input.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
