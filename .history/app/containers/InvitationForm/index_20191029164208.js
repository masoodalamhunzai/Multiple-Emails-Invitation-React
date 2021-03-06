/**
 *
 * InvitationForm
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Input from '../../components/Input';
import Button from '../../components/Button';


import makeSelectInvitationForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './style';

export function InvitationForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  useInjectReducer({ key: 'invitationForm', reducer });
  useInjectSaga({ key: 'invitationForm', saga });

  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="12" className="invitaion-form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom01"
                  className="custom-inputs"
                >
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="email"
                    defaultValue=""
                  />
                  {/* <Input type="email" placeholder="Email Address" /> */}
                </Form.Group>
                <div className="add-inputs">
                  <Button variant="link" btnText="add another" />
                  <Button variant="link" btnText="add many at once" />
                </div>
                <div className="send-invite">
                  <Button variant="secondary" btnText="Send Invites" />
                </div>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

InvitationForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  invitationForm: makeSelectInvitationForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(InvitationForm);
