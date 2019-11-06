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
  const [fields, setFields] = useState([{ value: null }]);

  const handleChange = (i, event) => {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  };

  const handleAdd = () => {
    console.log('clicked');
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  };
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
            {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                  /> */}
            <div>
              {/* <button type="button" onClick={handleAdd}>
                +
              </button> */}
              <Button
                variant="link"
                className="link"
                btnText="add another"
                type="button"
                onClick={handleAdd}
              />
              {fields.map((field, idx) => {
                return (
                  <div >
                    <input
                      type="text"
                      placeholder="Enter text"
                      value={field.value || ''}
                      onChange={e => handleChange(idx, e)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="add-inputs">
              <Button
                variant="link"
                className="link"
                btnText="add another"
                type="button"
                onClick={handleAdd}
              />
              <span>or </span>
              <Button
                variant="link"
                className="link"
                type="button"
                btnText="add many at once"
              />
            </div>
            {/* </Form.Group> */}
            <div className="send-invite">
              <Button
                variant="secondary"
                type="submit"
                btnText="Send Invites"
              />
            </div>
            {/* </Form.Row>
            </Form> */}
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
