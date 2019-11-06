import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .title{
      h4{
          font-weight:700;
      }
  }
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
