/**
 *
 * ConfirmInvitation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Wrapper from './styles';
import { isArray } from 'util';

// import styled from 'styled-components';

function ConfirmInvitation(props) {
  const { email } =
    props.location && props.location ? props.location.payload : '';
  console.log('email', email.length);
  return (
    <Wrapper>
      <Row className="justify-content-md-center">
        <Col md={{ span: 10, offset: 1 }} className="confirmation">
          <div className="title">
            <h4>Thank You!</h4>
          </div>
          <div className="received-invitation">
            <p>
              Following user received your invitation:{' '}
              <span className="sent-emails">
                {email && isArray(email) ?
                  ? email.map((item, index) => {
                      return (
                        <span key={index}>
                          {(index ? ', ' : '') +
                            (item && item.value ? item.value : item)}
                        </span>
                      );
                    })
                  : email}
              </span>
            </p>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
}

ConfirmInvitation.propTypes = {};

export default ConfirmInvitation;
