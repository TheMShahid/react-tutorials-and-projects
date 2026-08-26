import styled from "styled-components";

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;

    p {
      font-weight: 700;
      text-transform: capitalize;
      margin-bottom: 1rem;
      line-height: 2;
    }

    .drink-data {
      border-radius: var(--borderRadius);
      background: var(--primary-300);
      margin-right: 0.5rem;
      padding: 0.25rem 0.5;
      letter-spacing: var(--letter-spacing);
      color: var(--primary-700);
    }

    .ing {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }

  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }

    .drink-info {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
