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
import * as a from './actions';
import Wrapper from './style';

export function InvitationForm(props) {
  const [validated, setValidated] = useState(false);
  const [fields, setFields] = useState([{ value: null }]);
  const [textArea, setTextArea] = useState(false);

  const handleChange = (i, event) => {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  };
  const handleAddInput = () => {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
    setTextArea(false);
  };
  const handleAddTextArea = () => {
    setTextArea(true);
  };
  const handleRemove = i => {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  };
  const handleSubmit = event => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      if (textArea === false) {
        const payload = {
          to: fields,
        };
        props.sendInvitation(payload);
        console.log('inputs');
        console.log(payload);
      } else {
        console.log('textarea');
        console.log(fields);
      }
      // event.preventDefault();
      // event.stopPropagation();
    }
    setValidated(true);
  };

  useInjectReducer({ key: 'invitationForm', reducer });
  useInjectSaga({ key: 'invitationForm', saga });

  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={{ span: 10, offset: 1 }} className="invitaion-form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom01"
                  className="custom-inputs"
                >
                  {textArea && textArea ? (
                    <div className="textarea-input">
                      <Form.Label>
                        Enter multiple email addresses seprated by commas
                      </Form.Label>
                      <Form.Control required as="textarea" rows="5" />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                      </Form.Control.Feedback>
                    </div>
                  ) : (
                    <div>
                      <Form.Label>Email Address</Form.Label>
                      {fields.map((field, id) => {
                        return (
                          <Row key={id}>
                            <Col md="11">
                              <Form.Control
                                required
                                type="email"
                                placeholder="email"
                                value={field.value || ''}
                                onChange={e => handleChange(id, e)}
                              />
                            </Col>
                            <Col lg="1">
                              <Button
                                variant="link"
                                type="button"
                                className="link"
                                btnText="x"
                                handle={() => handleRemove(id)}
                              />
                            </Col>
                            <Col lg="12">
                              <Form.Control.Feedback type="invalid">
                                Please provide a valid email address.
                              </Form.Control.Feedback>
                            </Col>
                          </Row>
                        );
                      })}
                    </div>
                  )}
                  <div className="addBtn-inputs">
                    <Button
                      variant="link"
                      className="link"
                      btnText="add another"
                      type="button"
                      handle={handleAddInput}
                    />
                    <span>or </span>
                    <Button
                      variant="link"
                      className="link"
                      type="button"
                      btnText="add many at once"
                      handle={handleAddTextArea}
                    />
                  </div>
                </Form.Group>
                <div className="send-invite">
                  <Button
                    variant="secondary"
                    type="submit"
                    btnText="Send Invites"
                  />
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
  sendInvitation: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  invitationForm: makeSelectInvitationForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    sendInvitation: payload => dispatch(a.sendInvitation(payload)),
    setResponse: payload => dispatch(a.setResponse(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(InvitationForm);
