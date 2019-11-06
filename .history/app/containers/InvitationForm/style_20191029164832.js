import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .invitaion-form {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
  .add-inputs {
    display: flex;
    justify-content: space-evenly;
    .link {
        text-decoration:underline;
    }
  }
  .send-invite{
      display:block;
      justify-content:start;

  }
`;
export default Wrapper;
