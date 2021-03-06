import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  /* margin-top: 3rem; */

  .invitaion-form {
    display: flex;
    justify-content: center;
    .custom-inputs {
      display: flex;
      justify-content: center;
      flex-direction: column;
      .form-control {
        margin-bottom: 1rem;
      }
      .error {
        color: #d800ff;
        text-align: right;
      }
    }
  }
  .addBtn-inputs {
    display: flex;
    justify-content: start;
    padding-top: 1rem;
    .link {
      text-decoration: underline;
      padding: 0 1rem 0 1rem  !important;
    }
  }
  .send-invite {
    display: block;
  }
`;
export default Wrapper;
