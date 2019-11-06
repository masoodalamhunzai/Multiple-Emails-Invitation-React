import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .invitaion-form {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
  .addBtn-inputs {
    display: flex;
    justify-content: start;
    padding-top:1rem;
    .link {
      text-decoration: underline;
    }
  }
  .send-invite {
    display: block;
  }
`;
export default Wrapper;
