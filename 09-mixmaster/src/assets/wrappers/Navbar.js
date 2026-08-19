import styled from "styled-components";

const Wrapper = styled.nav`
  background: var(--white);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;

    .logo {
      font-size: clamp(1.5rem, 3vw, 3rem);
      color: var(--primary-500);
      font-weight: 700;
      letter-spacing: 2px;
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      gap: 0.5rem;

      .nav-link {
        letter-spacing: 2px;
        transition: var(--transition);
        color: var(--grey-900);

        &:hover {
          color: var(--primary-500);
          box-shadow: 0px 1px var(--primary-500);
        }
      }

      /* active */
      .active {
        color: var(--primary-500);
      }
    }
  }

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .nav-links {
        flex-direction: row;
        margin-top: 0;
      }
    }
  }
`;

export default Wrapper;
