import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .invitaion-form {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    .custom-inputs {
      display: flex;
      justify-content: center;
      flex-direction: column;
      .form-control {
        margin-bottom: 1rem;
      }
    }
  }
  .addBtn-inputs {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    .link {
      text-decoration: underline;
    }
  }
  .send-invite {
    display: block;
  }
`;
export default Wrapper;
