/**
 *
 * InvitationForm
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
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
  const [selectTextArea, setSelectTextArea] = useState(false);
  const [textArea, setTextArea] = useState(false);
  const [disableInput, setDisableInput] = useState(false);
  const [disableTextArea, setDisableTextArea] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // const validateEmail = email => {
  //   const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
  //   const result = pattern.test(email);

  //   if (result === true) {
  //     console.log("correct");
  //     setEmailError(false);
  //   } else {
  //     console.log("incorrect");

  //     setEmailError(true);
  //   }
  // };

  const validateEmail = field => {
    let regex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i;
    const result = regex.test(field);
    console.log(result)
    return result ? true : false;
    
  };
  const validateMultipleEmailsCommaSeparated = value => {
    let resultComma = value.split(',');
    for (let i = 0; i < resultComma.length; i++)
      if (!validateEmail(resultComma[i])) return false;
    return true;
  };

  const handleChange = (i, event) => {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  };
  const handleChangeTextArea = e => {
    const values = e.target.value;
    setTextArea(values);
    validateEmail(textArea);
    // validateMultipleEmailsCommaSeparated(textArea);
  };
  const handleAddInput = () => {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
    setSelectTextArea(false);
    setDisableInput(false);
    setDisableTextArea(true);
  };
  const handleAddTextArea = () => {
    setSelectTextArea(true);
    setDisableInput(true);
    setDisableTextArea(false);
  };
  const handleRemove = i => {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  };
  const handleSubmit = event => {
    const form = event.currentTarget;
    // console.log('submit', textArea);
    event.preventDefault();
    const emails = fields && fields.map(email => email.value);
    if (form.checkValidity() === true) {
      if (selectTextArea === false) {
        const payload = {
          email: emails,
        };
        props.sendInvitation(payload);
      } else {
        const payload = {
          email: textArea,
        };
        props.sendInvitation(payload);
      }
    }
    setValidated(true);
  };

  useInjectReducer({ key: 'invitationForm', reducer });
  useInjectSaga({ key: 'invitationForm', saga });
  const { response } = props.invitationForm;
  // console.log(response);
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
                  {selectTextArea && selectTextArea ? (
                    <div className="textarea-input">
                      <Form.Label>
                        Enter multiple email addresses seprated by commas
                      </Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows="5"
                        onChange={e => handleChangeTextArea(e)}
                        disabled={disableTextArea}
                      />
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
                                disabled={disableInput}
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
                              {/* {emailError && emailError ? 'Invalid email' : ''} */}
                              {/* <Form.Control.Feedback type="invalid">
                                invalid email address
                              </Form.Control.Feedback> */}
                            </Col>
                          </Row>
                        );
                      })}
                    </div>
                  )}
                  <div>
                    {response && response.status !== 200 && (
                      <div style={{ color: 'red' }}>{response.message}</div>
                    )}
                    {response && response.status === 200 && (
                      <Redirect
                        to={{
                          pathname: '/confirmInvitation',
                          payload: {
                            email: textArea ? textArea : fields,
                          },
                        }}
                      />
                    )}{' '}
                  </div>
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
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(InvitationForm);
