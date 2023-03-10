import styled from 'styled-components';

const FooterWrapper = styled.div`
  text-align: center;
  color: var(--white);
  font-weight: 400;
  margin-bottom: 3rem;

  .madeby {
    padding: 0.5rem 0.8rem;
    margin: 0 0.2rem;
    font-weight: 300;
    font-size: 0.8rem;
    color: var(--black);
    opacity: 0.8;

    &:hover {
      opacity: 0.5;
    }

    & > span {
      font-size: inherit;
      font-weight: 600;
    }
  }
`;

export default FooterWrapper;
