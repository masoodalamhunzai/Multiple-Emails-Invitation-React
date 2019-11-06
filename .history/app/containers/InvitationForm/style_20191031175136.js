import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  /* margin-top: 3rem; */

  .card-custom {
    box-shadow: rgb(204, 204, 204) 0px 3px 9px;
    padding: 3rem;
    width: 50%;
    margin: 3rem auto;
  }
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
      padding: 0 !important;
    }
  }
  .send-invite {
    padding-left: 0.4rem !important;
  }
  @media (max-width: 746px) {
    .card-custom {
      width: 100% !important;
    }
  }
`;
export default Wrapper;
