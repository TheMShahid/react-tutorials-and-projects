import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;

  h3 {
    text-align: center;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.25rem;
  }

  .back-to-home {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    text-transform: capitalize;
    font-size: 2rem;
    color: var(--primary-500);
  }
`;
export default Wrapper;
