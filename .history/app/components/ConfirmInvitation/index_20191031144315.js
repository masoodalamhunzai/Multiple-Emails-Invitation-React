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
        <Row>
          <Col md={12}>
        <h4>Thank You!</h4>
        </Col>

        </Row>
          <p>
            Following user received your invitation:{' '}
            <span className="sent-emails">
              {email &&
                email.map((item, index) => {
                  return (
                    <span key={index}>{(index ? ', ' : '') + item.value}</span>
                  );
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
