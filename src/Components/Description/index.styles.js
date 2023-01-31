import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  color: black;
  margin: 2rem auto 0rem auto;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 1rem 0;
`;

export const Title = styled.span`
  font-size: 4rem;
  margin: 0 0 1rem 0;
  background: linear-gradient(to right, var(--pinkred) 0%, var(--flameorange) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TitleWrapper = styled.div`
  font-family: 'PAYW Pro Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 1rem;
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const ContentWrapper = styled.p`
  font-weight: 400;
  line-height: 1.3;
`;

export const Content = styled.span`
  display: inline-block;
  background: var(--lightgray);
  border-radius: 12px;
  padding: 0.5rem;
  margin: 0 0.2rem;
`;
