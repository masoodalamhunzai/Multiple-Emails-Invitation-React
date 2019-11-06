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
  .textarea-title {
    font-size: 1rem;
  }
  .addBtn-inputs {
    display: flex;
    justify-content: start;
    padding-top: 1rem;
    .link {
      text-decoration: underline;
      padding: 0 !important;
    }
    .custom-padding {
      padding: 0 0.5rem;
    }
  }
  .send-invite {
    padding-left: 0.4rem !important;
  }
  @media (max-width: 746px) {
    .card-custom {
      width: 100% !important;
    }
    .link,
    .textarea-title {
      font-size: 0.9rem !important;
    }
    .custom-padding {
      padding: 0 3px !important;
    }
  }
`;
export default Wrapper;
