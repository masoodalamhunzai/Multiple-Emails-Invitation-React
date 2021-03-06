/**
 *
 * ConfirmInvitation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Wrapper from './styles';

// import styled from 'styled-components';

function ConfirmInvitation(props) {
  const { email } =
    props.location && props.location ? props.location.payload : '';
  return (
    <Wrapper>
      <Row className="justify-content-md-center">
        <Col md={{ span: 10, offset: 1 }} className="confirmation">
          <p>
            Following user received your invitation:{' '}
            <span>
              {email &&
                email.map(item => {
                  return item.value;
                })}
            </span>
          </p>
        </Col>
      </Row>
    </Wrapper>
  );
}

ConfirmInvitation.propTypes = {};

export default ConfirmInvitation;
