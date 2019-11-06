import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .confirmation {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 3rem;
  }
  .received-invitation {
    padding-top: 1rem;
    .sent-emails {
      font-weight: bold;
    }
  }
`;
export default Wrapper;
