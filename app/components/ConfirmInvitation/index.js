/**
 *
 * ConfirmInvitation
 *
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Wrapper from './styles';
import { isArray } from 'util';

function ConfirmInvitation(props) {
  const { email } =
    props.location && props.location ? props.location.payload : '';
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
                {email && isArray(email)
                  ? email.map((item, index) => {
                      return (
                        <span key={index}>
                          {(index ? ', ' : '') + item.value}
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
