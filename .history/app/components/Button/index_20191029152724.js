/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';

function Button(props) {
  return (
    <Wrapper>
      <button className="button" value={props.value}>
        {props.btnText}
      </button>
    </Wrapper>
  );
}

Button.propTypes = {
  btnText: PropTypes.string,
  value:PropTypes.string,
};

export default Button;
